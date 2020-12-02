sudo docker build ./ --tag car-server:latest

sudo docker run --publish 4343:4343 --detach --name car-container car-server:latest

docker pull mongo:4.0.4
docker run -d -p 27017:27017 --name mongodb mongo:4.0.4

docker ps -a

docker network create nest-mongo
docker network connect nest-mongo car-container
docker network connect nest-mongo mongodb

see logs
docker service logs containername
