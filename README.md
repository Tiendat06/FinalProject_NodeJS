- Run "npm i" in each folder "BackEnd"/"FrontEnd" to install all libraries  

Admin:  
phone: 0356779197  
password: 1234567890  

Customer  
phone: 0369852147  
password: 1234567890

Run docker swarm (there is 5 services include: BackEnd, FrontEnd, MongoDB, Redis, Nginx):  
Step 1: Run "docker build -t my-backend:latest ./BackEnd" to build BackEnd app  
Step 2: Run "docker build -t my-frontend:latest ./FrontEnd" to build FrontEnd app  
Step 3: Run "docker swarm init" to turn on docker swarm mode  
Step 4: Run "docker stack deploy -c docker-stack.yml my-app" to run all services  
Step 5: Run "docker stack services my-app" (this command line to check whether our services are on)  
Step 6: If you want to stop, run "docker swarm leave --force"    
step 7: Run "docker service update --force my-app_backend"  (optional if the backend keep loading on browser) --> run this command to restart services of the backend  
**Note  
You can clean cache by: "docker builder prune"  
You can scale your app to many replicas by using this: docker service scale my-app_backend={number of replica you want}
- Example: docker service scale my-app_backend=10  