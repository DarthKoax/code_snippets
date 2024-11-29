main();
console.log("This will print before foo() because it is asynchoronous, or not dependant")

function main() {
   console.log('before');
   foo().then(foo_response => {
         console.log(foo_response);

         if (foo_response && foo_response.message) {
            document.getElementById('app').textContent = foo_response.message;
         } else {
            document.getElementById('app').textContent = 'No message received';
         }
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

