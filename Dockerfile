# Используем официальный образ Node.js для сборки проекта Vue.js
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

# Используем легковесный образ HTTP-сервера Nginx для раздачи статических файлов
FROM nginx:alpine

# Копируем собранные файлы приложения в директорию Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Открываем порт 80 для веб-сервера Nginx
EXPOSE 8080

# Копируем startup.sh в контейнер
COPY startup.sh /usr/share/nginx/html/startup.sh

# Устанавливаем права на выполнение для startup.sh
RUN chmod +x /usr/share/nginx/html/startup.sh

# Запускаем startup.sh при запуске контейнера
CMD /usr/share/nginx/html/startup.sh
