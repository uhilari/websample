FROM node:20
WORKDIR /app
COPY . .
RUN npm install

ENV PORT_APP=80

EXPOSE $PORT_APP
CMD ["node", "index.js"]