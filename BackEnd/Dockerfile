FROM node:20.11.1-alpine
WORKDIR /src/app

COPY package*.json ./
RUN npm install --production

COPY . .
EXPOSE 3000
ENV PORT=3000
ENV CLOUDINARY_SECRET=${CLOUDINARY_SECRET}
ENV MONGO_HOST=mongodb
ENV MONGO_PORT=27017
ENV MONGO_DB=nodejs_final
ENV JWT_SECRET_KEY=${JWT_SECRET_KEY}
ENV MAIL_SERVER=${MAIL_SERVER}
ENV MAIL_USERNAME=${MAIL_USERNAME}
ENV MAIL_PASSWORD=${MAIL_PASSWORD}
ENV MAIL_PORT=${MAIL_PORT}
ENV CLIENT_ID=${CLIENT_ID}
ENV CLIENT_SECRET=${CLIENT_SECRET}

CMD ["npm", "start"]