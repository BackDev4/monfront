
FROM node:14

RUN npm install

EXPOSE 80

CMD [ "npm", "run", "serve"]