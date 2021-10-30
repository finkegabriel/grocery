FROM node:12
WORKDIR .
COPY package*.json ./

RUN npm install
RUN apt update && apt install -y apt-transport-https ca-certificates sqlite3

COPY . .
EXPOSE 3011
CMD ["npm", "start"]