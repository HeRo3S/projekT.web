FROM node:18-alpine AS builder

WORKDIR /usr/src/app

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn install

COPY . .

ARG BASE_URL
ENV REACT_APP_BASE_URL=${BASE_URL}

RUN yarn build

### second stage
FROM caddy:2.6.2-alpine

ARG CADDYFILE
COPY --from=builder /usr/src/app/${CADDYFILE} /etc/caddy/Caddyfile

COPY --from=builder /usr/src/app/build/ /srv

EXPOSE 80

EXPOSE 443