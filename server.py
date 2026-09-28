import http.server
import socketserver
import os
import urllib.parse

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class SmartBOAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

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

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), SmartBOAHandler) as httpd:
        print(f"Smart BOA Server running at http://localhost:{PORT}")
        httpd.serve_forever()
