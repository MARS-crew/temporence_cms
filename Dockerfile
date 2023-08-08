
FROM node:16 as builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build


FROM httpd:2.4

RUN apt-get update && apt-get install -y apache2

COPY --from=builder /app/dist /var/www/html/

COPY apache.conf /etc/apache2/sites-available/000-default.conf

RUN a2enmod rewrite

CMD ["apache2ctl", "-D", "FOREGROUND"]