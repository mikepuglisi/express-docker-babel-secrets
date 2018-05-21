FROM node:10.1.0-alpine

RUN addgroup -g 2000 -S app && \
    adduser -u 2000 -S app -G app

WORKDIR /home/app

RUN npm config set registry https://registry.npmjs.org
COPY package.json /home/app/package.json
RUN npm install \ 
 && npm cache clean --force 
 # && mv /app/node_modules /node_modules
COPY . /home/app

ENV PORT 80
EXPOSE 80

CMD ["node", "node ./src/index.js"]
