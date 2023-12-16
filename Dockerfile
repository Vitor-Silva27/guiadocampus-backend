FROM node:18

WORKDIR /usr/src/api

COPY . .

RUN npm install --quiet --no-optional --no-fund --loglevel=error

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start:prod"]