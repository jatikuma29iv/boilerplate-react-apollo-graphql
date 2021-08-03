
# Stage 1: base images
FROM node:lts-alpine as base

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

ADD --chown=node:node package.json .

RUN npm i

ADD --chown=node:node . .

USER node

CMD npm start
