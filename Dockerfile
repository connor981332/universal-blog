#dev container
FROM mcr.microsoft.com/devcontainers/base:alpine-3.19 AS dev
RUN apk update
RUN apk upgrade
RUN apk add nodejs npm
RUN mkdir /workspace

#prod container
FROM alpine:3.19 AS prod
RUN apk update
RUN apk upgrade
RUN apk add nodejs npm
WORKDIR /app/universal-blog
COPY ./app ./app
COPY ./components ./components
COPY ./public ./public
COPY ./src ./src
COPY ./next-env.d.ts ./next-env.d.ts
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./tsconfig.json ./tsconfig.json
RUN npm install
RUN npm run build
EXPOSE 3000
ENTRYPOINT npm start