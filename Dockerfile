FROM node:16-alpine as builder

# yarn 설치
# RUN npm install -g yarn 

# 작업 디렉토리 지정
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# 의존성 설치
COPY package.json yarn.lock ./
RUN yarn install --immutable --immutable-cache --check-cache

# copy files
COPY . . 

# build
RUN yarn build

FROM node:16-alpine AS development

# Dockerfile build 시에 사용하는 변수
ARG NODE_ENV=development
# Container 시작 시에 사용하는 변수
ENV NODE_ENV={NODE_ENV}

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json /usr/src/app/tsconfig.json ./
COPY --from=builder /usr/src/app/dist ./dist
