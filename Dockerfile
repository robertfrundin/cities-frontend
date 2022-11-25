FROM node:latest as frontend

WORKDIR frontend
COPY ./ .

RUN npm install -g npm@9.1.2
RUN npm i

ENTRYPOINT npm start
