#specify base image
FROM node:14-alpine

WORKDIR /usr/app

#copy package.json first to avoid cache bursting due to file changes
COPY ./package.json ./

#install dependencies
RUN npm install
#copy rest of the files 
COPY ./ ./

#default command when container starts
CMD ["npm", "start"]

#run command 
# docker run -p 9898:9898 <image_id>