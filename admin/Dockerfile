FROM node:alpine
RUN apk update \
&& apk add vim \
&& apk add bash
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
EXPOSE 3001
CMD ["npm", "run", "start"]