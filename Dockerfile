FROM node:14 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY startup.sh /usr/share/nginx/html/startup.sh

CMD sh /usr/share/nginx/html/startup.sh
