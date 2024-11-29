#!/usr/bin/env python3
from http.server import HTTPServer, BaseHTTPRequestHandler
import json
import time

class CORSRequestHandler(BaseHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def do_GET(self):
        time.sleep(4)
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        response = {'message': 'Hello, world!', 'woof': 'meow'}
        self.wfile.write(json.dumps(response).encode())

if __name__ == '__main__':
    httpd = HTTPServer(('0.0.0.0', 5000), CORSRequestHandler)
    print("Serving at port", 5000)
    httpd.serve_forever()
