FROM node:lts-buster
 
WORKDIR /usr/src/app
 
COPY package*.json ./
 
RUN npm install
 
COPY . .
 
EXPOSE 3002
 
CMD ["npm", "start"]
