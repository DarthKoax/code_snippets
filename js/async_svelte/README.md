Using vite to create the project 
*ref: https://vite.dev/guide/* 

```
 npm create vite@latest myapp -- --template svelte
 ```

 Followed by 
 ```
 cd myapp
 npm install 
 npm run dev -- --host
 ```


 Ephemeral development container can be created using the following. 
 ```
 docker run --name svelte_test --rm -it -p 5173:5173 -v./component:/component -v ./app:/app -w /app/ node:lts-alpine3.20 sh

 ```


 Assistance on this was received from:
 https://discord.com/channels/457912077277855764/1314819297842958376
