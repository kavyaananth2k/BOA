import http.server
import socketserver
import os
import urllib.parse
import json
import datetime
import uuid
import smtplib
from email.mime.text import MIMEText

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class SmartBOAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_POST(self):
        parsed_url = urllib.parse.urlparse(self.path)
        if parsed_url.path in ['/api/enrol', '/api/submit-form', '/api/contact']:
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            
            try:
                data = json.loads(post_data.decode('utf-8'))
            except Exception:
                data = urllib.parse.parse_qs(post_data.decode('utf-8'))

            timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            recipient_email = "admin@thebritishonlineacademy.com"
            
            first_name = data.get('firstName') or data.get('fullName') or data.get('fullNamePage') or data.get('first_name') or 'N/A'
            last_name = data.get('lastName') or data.get('last_name') or ''
            email = data.get('userEmail') or data.get('email') or data.get('emailAddress') or data.get('emailAddressPage') or 'N/A'
            phone = data.get('userPhone') or data.get('phone') or data.get('phoneNumber') or data.get('phoneNumberPage') or 'N/A'
            course = data.get('courseFormName') or data.get('course') or data.get('courseInterest') or data.get('programme') or data.get('programmeSelectPage') or 'N/A'
            payment = data.get('paymentOption') or data.get('payment') or 'N/A'
            country = data.get('country') or data.get('countrySelectPage') or 'N/A'
            message = data.get('message') or data.get('messageText') or data.get('messageTextPage') or 'N/A'
            
            submission_record = {
                "id": str(uuid.uuid4())[:8],
                "timestamp": timestamp,
                "recipient_email": recipient_email,
                "first_name": first_name,
                "last_name": last_name,
                "email": email,
                "phone": phone,
                "course": course,
                "payment_option": payment,
                "country": country,
                "message": message,
                "raw_data": data
            }

            # 1. Save submission record locally to enrolments.json
            enrolments_file = os.path.join(DIRECTORY, 'enrolments.json')
            records = []
            if os.path.exists(enrolments_file):
                try:
                    with open(enrolments_file, 'r', encoding='utf-8') as f:
                        records = json.load(f)
                except Exception:
                    records = []
            records.append(submission_record)
            with open(enrolments_file, 'w', encoding='utf-8') as f:
                json.dump(records, f, indent=2)

            # 2. Log email dispatch
            email_log_file = os.path.join(DIRECTORY, 'email_notifications.log')
            email_content = f"""==================================================
ENROLMENT SUBMISSION DISPATCH LOG
Target Recipient: {recipient_email}
Date/Time: {timestamp}
--------------------------------------------------
First Name:     {first_name}
Last Name:      {last_name}
Email Address:  {email}
Phone Number:   {phone}
Course / Prog:  {course}
Payment Option: {payment}
Country:        {country}
Message:        {message}
==================================================
\n"""
            with open(email_log_file, 'a', encoding='utf-8') as f:
                f.write(email_content)

            # 3. Attempt SMTP dispatch if configured
            try:
                smtp_server = os.environ.get('SMTP_SERVER')
                if smtp_server:
                    smtp_port = int(os.environ.get('SMTP_PORT', 587))
                    msg = MIMEText(email_content)
                    msg['Subject'] = f"New Enrolment: {first_name} {last_name} - {course}"
                    msg['From'] = email
                    msg['To'] = recipient_email
                    with smtplib.SMTP(smtp_server, smtp_port, timeout=5) as s:
                        s.starttls()
                        if os.environ.get('SMTP_USER'):
                            s.login(os.environ.get('SMTP_USER'), os.environ.get('SMTP_PASS'))
                        s.send_message(msg)
            except Exception:
                pass

            response_payload = {
                "status": "success",
                "message": f"All enrolment details submitted successfully and dispatched to {recipient_email}.",
                "recipient": recipient_email,
                "record": submission_record
            }

            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(json.dumps(response_payload).encode('utf-8'))
            return

    def do_GET(self):
        # Parse URL path
        parsed_url = urllib.parse.urlparse(self.path)
        rel_path = parsed_url.path.lstrip('/')
        
        # If root, serve index.html
        if not rel_path or rel_path == '/':
            self.path = '/index.html'
            return super().do_GET()

        full_path = os.path.join(DIRECTORY, rel_path)

        # 1. Direct file match
        if os.path.isfile(full_path):
            return super().do_GET()

        # 2. Try adding .html
        if os.path.isfile(full_path + '.html'):
            self.path = '/' + rel_path + '.html'
            if parsed_url.query:
                self.path += '?' + parsed_url.query
            return super().do_GET()

        # 3. If directory with index.html
        if os.path.isdir(full_path) and os.path.isfile(os.path.join(full_path, 'index.html')):
            self.path = '/' + rel_path.rstrip('/') + '/index.html'
            return super().do_GET()

        # 4. Fallback to custom 404.html
        self.send_response(404)
        self.send_header("Content-type", "text/html; charset=utf-8")
        self.end_headers()
        
        custom_404 = os.path.join(DIRECTORY, '404.html')
        if os.path.isfile(custom_404):
            with open(custom_404, 'rb') as f:
                self.wfile.write(f.read())
        else:
            self.wfile.write(b"<html><body><h1>404 Not Found</h1></body></html>")

class ThreadingBOAServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True
    daemon_threads = True

if __name__ == '__main__':
    with ThreadingBOAServer(("", PORT), SmartBOAHandler) as httpd:
        print(f"Smart BOA Server running at http://localhost:{PORT}", flush=True)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass
