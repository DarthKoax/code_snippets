# async-await-fetch
Basic javascript snippet on how to use fetch with async/await. Add main logic path into main function to code synchronously or rename and only add dependent code into 'main', all other code can be placed at the top level if it is not dependent upon foo();
```javascript
<script>
main();
console.log("This will print before foo() because it is asynchoronous, or not dependant")

async function main() {
   const foo_response = await foo();
   console.log('before')
   console.log(foo_response)
   console.log('after')
}

async function foo() {
   try {
      let response = await fetch("http://localhost:5000/");
      if (response.ok) {
         // let result = await response.text()
         let result = await response.json()
         return result;
      } else {
         throw new Error(`HTTP error! status: ${response.status}`);
      }
   } catch (error) {
      console.error("Error:", error);
   }
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