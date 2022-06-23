# Dockerfile
FROM node:18.4.0

WORKDIR /app

COPY . .

RUN npm install

ENTRYPOINT ["npm", "start"]