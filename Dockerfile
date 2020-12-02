FROM node:10
WORKDIR /usr/src/
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4343
CMD ["npm", "run", "start:dev"]
