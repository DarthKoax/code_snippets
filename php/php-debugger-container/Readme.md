## PHP xDebug Containerised Sample  
This sample configuration will allow you do locally debug a php application running in an alpine container.  

How to use:  
1. Clone the repo and open this directory in vscode.  
2. Locally in VSCODE install xdebug extension (https://open-vsx.org/extension/xdebug/php-debug)
3. Run `make up`  
4. Navigate to `http://localhost:8081`
5. In VSCODE open `app/index.html`. Set a breakpoint (F9).
6. Start debugging `F5`
7. In the Web Browser refresh `http://localhost:8081` 


Debug logs: 
 * VSCode Debug console.
 * Run `make tail_debug` 


 Key Values:
 `xdebug.client_host` needs to be set to a value the container can reach the local machine at.   
 `xdebug.client_port` needs to be accessible from the container.  
 `xdebug.log_level` is an integer 7=debug.  

 Troubleshooting: 
 If the breakpoint isn't grabbed. There is likely a path mapping misconfiguration. Find the errors with make `tail_debug`  