### STAGE 1: Build ###
FROM node:lts-alpine AS build

#### make the 'app' folder the current working directory
WORKDIR /usr/src/app

#### copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

#### install angular cli
RUN npm install -g @angular/cli

#### install project dependencies
RUN npm install

#### copy things
COPY . .

#### generate build --prod
RUN npm run build

### STAGE 2: Run ###
FROM nginx:stable
# FROM nginx:1.17.1-alpine

# RUN chmod -R 777 /var/log/nginx /var/cache/nginx/ \
#     && chmod -R 777 /etc/nginx/*
# RUN touch /var/run/nginx.pid && \
    # chown 777 /var/run/nginx.pid
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx  && chmod -R g+w /etc/nginx

#### copy nginx conf
COPY nginx.conf /etc/nginx/nginx.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf

#### copy artifact build from the 'build environment'
COPY --from=build /usr/src/app/dist/angular-starter /usr/share/nginx/html
#### don't know what this is, but seems cool and techy
# CMD ["nginx", "-g", "daemon off;"]
# RUN usermod -u 1000 www-data
# RUN nginx -t
# RUN /etc/init.d/nginx start
CMD ["nginx", "-g", "daemon off;"]

# FROM nginx
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY /user/src/app/dist/angular-starter /usr/share/nginx/html