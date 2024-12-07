main();
console.log("This will print before foo() because it is asynchoronous, or not dependant")

async function main() {
   console.log('before')
   const foo_response = await foo();
   console.log(foo_response)
   console.log('after')

   if (foo_response && foo_response.message) {
      document.getElementById('app').textContent = foo_response.message;
  } else {
      document.getElementById('app').textContent = 'No message received';
  }
}

async function foo() {
   try {
      // This must be resolvable client side. 
      let response = await fetch("http://192.168.1.101:7417/", {mode: 'no-cors'});
      console.log(response.ok)
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
