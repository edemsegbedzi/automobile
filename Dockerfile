# syntax=docker/dockerfile:1
FROM node:18.3.0
ENV NODE_ENV=development
WORKDIR  /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
RUN npm run build
CMD [ "node" ,"dist/main.js"]

