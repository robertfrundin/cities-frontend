FROM node:latest as frontend

WORKDIR frontend
COPY ./ .

RUN npm i

ENTRYPOINT npm start
