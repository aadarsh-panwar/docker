#Basic image of redis server from base image alpine
# use docker build . in basic-image-build dir 
# open another terminal session 
# use docker exec -it <container_id> redis-cli to connect with redis-server

FROM alpine

RUN apk add --update redis


CMD ["redis-server"]