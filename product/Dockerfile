FROM node:lts-buster
 
WORKDIR /usr/src/app
 
COPY package*.json ./
 
RUN npm install
 
COPY . .
 
EXPOSE 3003
 
CMD ["npm", "start"]
