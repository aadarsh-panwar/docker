#specify base image
FROM node:14-alpine

#copy files from local to container
COPY ./ ./

#install dependencies
RUN npm install 

#default command when container starts
CMD ["npm", "start"]

#run command 
# docker run -p 9898:9898 <image_id>