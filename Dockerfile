# Dockerfile
FROM node:19.7.0

WORKDIR /app

COPY . .

RUN npm install

ENTRYPOINT ["npm", "start"]