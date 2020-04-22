FROM node:12

WORKDIR /usr/src/app

COPY ./*.json ./

COPY ./dist/ ./dist

RUN npm install

EXPOSE 4000

CMD ["node", "dist/main"]