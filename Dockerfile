# syntax=docker/dockerfile:1

# Backend
FROM node:18.14.2 as client 

WORKDIR /dist

COPY ["./package.json","./yarn.lock","./"]

RUN yarn install

COPY ["./", "./"]

ENV BACKEND_URL = appb-nftplatco-dev-01.azurewebsites.net
    
RUN yarn build

CMD [ "yarn", "start" ]