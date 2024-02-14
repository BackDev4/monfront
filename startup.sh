#!/bin/sh
sed -i "s,LISTEN_PORT,$PORT,g" /etc/nginx/nginx.conf
# Запуск Nginx
nginx -g "daemon off;"