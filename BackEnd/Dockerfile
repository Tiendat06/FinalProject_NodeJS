FROM node:20.11.1-bullseye-slim

RUN apt-get update && apt-get install -y \
    make \
    g++ \
    python3 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]