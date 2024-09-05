FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 9000

CMD ["npx", "quasar", "dev"]
