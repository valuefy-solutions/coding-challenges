## Coding challenge for devops
Write a shell script to automate deployments from a central devops or Jenkins server. 
I have specified the commands wherever I felt necessary. 
You are free to assume certain points as long as you specify them in the shell script as a comment.
The deployment flow is as below

### Deployment flow
* Pull code from github (https://github.com/ketansp/loopback-base-application).
* Install project level node.js depedencies using ```npm install``` from project directory.
* Start OpenVPN connection with ```valuefy.opvn``` configuration in home directory file to get onto the relevant network
* Transfer the files to server 1 (ubuntu@10.0.0.1) and server 2 (10.0.0.2), in proper directory structure in /var/www/valuefy/{datetime}. datetime denotes the build time
* On both servers, create a symlink of /var/www/valuefy/current pointing to /var/www/valuefy/{datetime}
* On both servers, reload bash profile
* On both servers, reload application server using ```pm2 reload``` command while ensuring that there is no downtime globally. Do note that application takes each one minute to shut down and one minute to boot.
* Close OpenVPN connection.
* Print on console that 'Deployment is successful!'.
