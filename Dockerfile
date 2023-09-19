FROM node:16-alpine 

RUN npm install -g ts-node

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY tsconfig.paths.json ./

CMD npm config set cache-min 9999999 \
    && npm install \
    && npm run dev

