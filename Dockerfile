ARG NODE_IMAGE=node:18.15-alpine

FROM $NODE_IMAGE AS base
RUN apk --no-cache add dumb-init
RUN mkdir -p /home/node/app && chown node:node /home/node/app
WORKDIR /home/node/app
USER node
RUN mkdir tmp

FROM base AS dependencies
ARG NPM_TOKEN
COPY --chown=node:node ./package*.json ./
RUN npm ci
COPY --chown=node:node . .
FROM dependencies AS build
RUN node ace build --production

FROM base AS production
ARG NPM_TOKEN
ENV NODE_ENV=production
ENV PORT=$PORT
ENV HOST=0.0.0.0
COPY --chown=node:node ./package*.json ./
RUN  npm ci --production
COPY --chown=node:node --from=build /home/node/app/build .
COPY ./.env ./


USER root
EXPOSE $PORT
CMD [ "dumb-init", "nodemon", "src/index.ts" ]
