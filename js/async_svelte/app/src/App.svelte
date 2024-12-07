<script>
     import { onMount } from 'svelte';
  // import Counter from './lib/Counter.svelte'
  let name = 'Bob'  
  let bob;

  onMount(async () => {
      // Set initial bob   
      bob = await fetchData();
      
      // Set an interval to run every 30 seconds (30000 ms)
      const interval = setInterval(fetchData, 30000);

      // Return a cleanup function that runs when the component is destroyed
      return () => {
         clearInterval(interval);
      };
   });

  async function fetchData() {
    try {
        console.log("resp")
        let response = await fetch("http://127.0.0.1:8041/");
        if (response.ok) {
           console.log("Response: ", response.ok)
            // let result = await response.
            let result = await response.text()
            return result;
         } else {
            throw new Error(`HTTP error! status: ${response.status}`);
         }
      } catch (error) {
         console.error("Error:", error);
      }
   }

</script>

<main>
  <p>Hello {name}</p>
  <p>{bob}</p>
</main>

<style>
 
</style>
