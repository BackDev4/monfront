# Используем официальный образ Node.js
FROM node:14 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем все остальные файлы приложения
COPY . .

# Собираем проект Vue.js
RUN npm run build

# Используем легковесный образ HTTP-сервера для статических файлов
FROM nginx:alpine

# Копируем собранные файлы приложения в директорию Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Открываем порт 80 для веб-сервера Nginx
EXPOSE 80

WORKDIR /app
COPY . /app
CMD sh /app/startup.sh