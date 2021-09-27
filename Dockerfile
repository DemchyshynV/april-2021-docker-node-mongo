FROM node:14-alpine
MAINTAINER Some Dev

RUN apk add bash

RUN mkdir /app
WORKDIR /app

COPY ./backend/package.json /app

RUN npm install --production

