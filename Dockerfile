FROM node:18.16.0

RUN mkdir -p /home/app

COPY . /Users/javier/Documents/ptnode/Docker/

EXPOSE 3000

CMD ["node","/Users/javier/Documents/ptnode/Docker/index.js"]