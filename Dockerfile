# base image
FROM node:12.16.3-alpine

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . /app/

EXPOSE ${PORT}

# CMD [ "yarn", "start" ]