sudo docker build ./ --tag car-server:latest

sudo docker run --publish 8000:8080 --detach --name car-container car-server:latest
