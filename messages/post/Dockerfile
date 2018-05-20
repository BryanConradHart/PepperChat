FROM node:8.9-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install --production
COPY . .
RUN npm run build
EXPOSE 8080
CMD npm start