FROM node:16 as builder

RUN yarn cache clean
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json yarn.lock /usr/src/app/
RUN yarn install


COPY . /usr/src/app

RUN yarn add -D typescript

RUN yarn build

FROM nginx:1.19

RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]