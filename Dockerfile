FROM node:8.1
RUN apt update
RUN apt install rsync -y
# add only package.json so docker uses the cache to build image except when a dependency has changed
ADD package.json /src/package.json

RUN cd src && npm install

# add remaining source code to container so we can actually run the app
ADD . /src

WORKDIR /src

EXPOSE 3000

CMD npm start
