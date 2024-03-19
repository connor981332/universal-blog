FROM alpine:3.19.1 AS base
RUN apk update
RUN apk upgrade
RUN apk add nodejs npm

FROM base as dev
RUN apk add git
RUN mkdir /workspace
RUN git config --global --add safe.directory /workspace

# FROM base as prod
# WORKDIR /app/nectar-demo
# COPY ./bin ./bin
# COPY ./public ./public
# COPY ./src ./src
# COPY ./package.json ./package.json
# COPY ./package-lock.json ./package-lock.json
# RUN npm install
# EXPOSE 3000
# ENTRYPOINT npm start