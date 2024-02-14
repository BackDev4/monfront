# Используем официальный образ Node.js
FROM node:14

# Установка зависимостей и копирование файлов приложения
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Сборка проекта Vue.js
RUN npm run build

# Используем легковесный образ HTTP-сервера для статических файлов
FROM nginx:alpine

# Копирование собранного приложения в директорию Nginx
COPY --from=0 /app/dist /usr/share/nginx/html

# Открытие порта 80 для веб-сервера Nginx
EXPOSE 80

CMD sh /app/startup.sh