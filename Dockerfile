FROM node:argon

RUN npm set progress=false && npm install -g npm
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/workspace && cp -a /tmp/node_modules /opt/workspace/

WORKDIR /opt/workspace
ADD . /opt/workspace

RUN npm run build

VOLUME ["/opt/workspace/public"]

CMD tail -f /dev/null
