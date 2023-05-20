FROM node:alpine

RUN mkdir -p /home/app/k8class

COPY . /home/app/k8class

WORKDIR /home/app/k8class

RUN npm install

EXPOSE 4343

CMD ["npm", "run", "begin"]

