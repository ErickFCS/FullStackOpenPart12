FROM node:20.9.0-bullseye-slim

RUN apt-get update && apt-get install dumb-init

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --omit=dev

ENV DEBUG=app:*

USER node

EXPOSE 3000

ENTRYPOINT ["dumb-init", "--"]

CMD ["npm", "start"]