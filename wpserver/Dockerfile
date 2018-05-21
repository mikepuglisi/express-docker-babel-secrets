FROM node:10.1.0-alpine

RUN addgroup -g 2000 -S app && \
    adduser -u 2000 -S app -G app && \
    mkdir wpserver

WORKDIR /home/app/wpserver

RUN  npm config set registry https://registry.npmjs.org
COPY package.json /home/app/wpserver/package.json
RUN npm install \  
 && npm cache clean --force \
 && mv /home/app/wpserver/node_modules /home/app/node_modules
COPY . /home/app/wpserver

ENV PORT 80
EXPOSE 80

CMD ["node", "node ./src/index.js"]
