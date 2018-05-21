FROM node:10.1.0-alpine

RUN mkdir -p /app
WORKDIR /app

RUN npm install -g nodemon

RUN npm config set registry https://registry.npmjs.org
COPY package.json /app/package.json
RUN npm install \ 
 && npm cache clean --force \
 && mv /app/node_modules /node_modules
COPY . /app

ENV PORT 80
EXPOSE 80

CMD ["node", "node ./bin/www"]
