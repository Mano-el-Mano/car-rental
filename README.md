To run

```sudo docker build ./ --tag car-server:latest```

```docker pull mongo:latest```

```docker-compose up```

To get from deployed api

GET http://139.59.214.175:80/api/cars

POST http://139.59.214.175:80/api/cars/ratings/{carId}/{rating}
