# Promise resolution fetch
Basic javascript snippet on how to use fetch promises.
```javascript
<script>
main();
console.log("This will print before foo() because it is asynchoronous, or not dependant")

function main() {
   console.log('before');
   foo().then(foo_response => {
         console.log(foo_response);
      }).catch(error => {
         console.error('Error in main:', error);
         document.getElementById('app').textContent = 'An error occurred';
      });
   console.log('after');
}

function foo() {
   return fetch("http://localhost:5000/")
      .then(response => {
         if (response.ok) {
            return response.json();
         } else {
            throw new Error(`HTTP error! status: ${response.status}`);
         }
      })
      .catch(error => {
         console.error("Error in foo:", error);
         throw error; // Propagate the error to be handled by the caller
      });
}
</script>

```

## Python server
Here is a basic python server which can be used for testing the above javascript request. It just returns basic json.

```python
#!/usr/bin/env python3
from http.server import HTTPServer, BaseHTTPRequestHandler
import json
import time

class CORSRequestHandler(BaseHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def do_GET(self):
        time.sleep(1)
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        response = {'message': 'Hello, world!', 'woof': 'meow'}
        self.wfile.write(json.dumps(response).encode())

if __name__ == '__main__':
    httpd = HTTPServer(('0.0.0.0', 5000), CORSRequestHandler)
    print("Serving at port", 5000)
    httpd.serve_forever()
                                                                                                                            
```

Insert the below and remove response to return plain text. 
```python
self.end_headers()
self.wfile.write(b'Hello, world!')
```



## Running the example:
```bash
docker compose up -d --force-recreate
```
