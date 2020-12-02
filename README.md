To run

sudo docker build ./ --tag car-server:latest
docker pull mongo:latest
docker-compose up

To get from deployed api

GET http://139.59.214.175:80/api/cars

POST http://139.59.214.175:80/api/cars/ratings/5fc70f510b2e0800129bb76b/{rating: number}
