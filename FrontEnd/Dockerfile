FROM node:20.11.1-alpine
WORKDIR /src/app

COPY package*.json ./
RUN npm install --production

COPY . .
EXPOSE 5000
ENV PORT=5000
ENV REACT_APP_API_URL="http://localhost:3000"
ENV REACT_APP_CLIENT_ID=${REACT_APP_CLIENT_ID}

CMD ["npm", "start"]