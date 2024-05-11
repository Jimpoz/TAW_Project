# Create docker image for the API
FROM node:19

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["http-server", "-p", "8080"]