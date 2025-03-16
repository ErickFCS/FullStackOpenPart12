FROM node:23-alpine

RUN wget -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v1.2.5/dumb-init_1.2.5_x86_64
RUN chmod +x /usr/local/bin/dumb-init

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 5173

ENTRYPOINT ["dumb-init", "--"]

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]