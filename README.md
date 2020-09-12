<h1 align="center">Welcome to boilerplate-express-typescript-sequelize 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.1.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/npm-%3E%3D6.10.0-blue.svg" />
  <img src="https://img.shields.io/badge/node-%3E%3D10.x-blue.svg" />
  <a href="https://github.com/masb0ymas/boilerplate-express-typescript-sequelize#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/masb0ymas/boilerplate-express-typescript-sequelize/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/masb0ymas/boilerplate-express-typescript-sequelize/blob/master/LICENSE.md" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Just Boilerplate Express with TypeScript ( 🦊 )

## Prerequisites

- npm >= 6.10.0
- node >= 10.x
- eslint >= 6.7.2
- Familiar with TypeScript 💪

## Feature

- [TypeScript](https://github.com/microsoft/TypeScript) v3.8.2
- [Sequelize ORM](https://github.com/sequelize/sequelize) v6
- Middleware Auth with [Passport](https://github.com/jaredhanson/passport)
- [Nodemailer](https://github.com/nodemailer/nodemailer)
- [Handlebars](https://github.com/wycats/handlebars.js) for templating HTML
- [Yup](https://github.com/jquense/yup) for validation schema
- JavaScript Style [Airbnb Base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
- Formating code using [Prettier](https://github.com/prettier/prettier) Integration [Eslint](https://github.com/prettier/eslint-config-prettier)
- Using [Babel Resolver](https://github.com/tleunen/babel-plugin-module-resolver) for simplify the require/import paths
- Documentation with [Swagger](https://github.com/swagger-api/swagger-ui)

## Install

```sh
yarn
```

## Usage Development

```sh
yarn run start
```

## Type Checking

```sh
yarn run type-check
or
yarn run type-check:watch
```

## Build

```sh
yarn run build
```

## Usage Production

```sh
yarn run serve:production
```

## Run tests

```sh
yarn run test
```

## Run with Docker

Adjust the config in .env like this:

```sh
...

PORT=7000

...

DB_CONNECTION=mysql
DB_HOST=172.16.235.11
DB_PORT=3306
DB_DATABASE=example
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_OPERATOR_ALIAS=
DB_TIMEZONE=+07:00

...

PROD_DB_CONNECTION=mysql
PROD_DB_HOST=172.16.235.11
PROD_DB_PORT=3306
PROD_DB_DATABASE=example
PROD_DB_USERNAME=your_username
PROD_DB_PASSWORD=your_password
PROD_DB_OPERATOR_ALIAS=
PROD_DB_TIMEZONE=+07:00

...

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=your_password
REDIS_PORT=6380 // Default: 6379
```

`container_name` in each service is customizable.

`PORT=...` If you want to use a port other than 7000, you must also change the port in the services `app`

```yml
services:
  app:
    build:
      context: .
    container_name: express_app
    depends_on:
      - db
      - redis
    restart: always
    ports:
      - '7000:7000' // change this port
```

`DB_HOST=..`. must be accessed using IPv4 Docker Network services `db`.

```yml
db:
  image: mariadb
  container_name: express_db
  volumes:
    - ./storage/mariadb-volume:/var/lib/mysql
  environment:
    MYSQL_ROOT_PASSWORD: ${PROD_DB_PASSWORD}
    MYSQL_DATABASE: ${PROD_DB_DATABASE}
    MYSQL_USER: ${PROD_DB_USERNAME}
    MYSQL_PASSWORD: ${PROD_DB_PASSWORD}
  restart: always
  ports:
    - '3307:3306'
  networks:
    private_network:
      ipv4_address: 172.16.235.11 // use this host
```

After all the above configuration is adjusted, you can run it with the command:

Command aggregates the output of each container

```sh
docker-compose up
```

Detached mode: Run containers in the background,

```sh
docker-compose up -d
```

## SMTP Basic

```sh
MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailgun.org
MAIL_PORT=465
MAIL_AUTH_TYPE=
MAIL_USERNAME=your_mail@domain.com
MAIL_PASSWORD=your_password
MAIL_ENCRYPTION=null
```

## SMTP Google Oauth Email ( Gmail )

```sh
MAIL_DRIVER=gmail
MAIL_HOST=null
MAIL_PORT=null
MAIL_AUTH_TYPE=OAuth2
MAIL_USERNAME=your_account@gmail.com
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null

OAUTH_CLIENT_ID=your_client_id
OAUTH_CLIENT_SECRET=your_client_secret
OAUTH_REDIRECT_URL=https://developers.google.com/oauthplayground
OAUTH_REFRESH_TOKEN=your_refresh_token
```

[Setup Google Oauth](https://medium.com/@nickroach_50526/sending-emails-with-node-js-using-smtp-gmail-and-oauth2-316fe9c790a1)

## Author

👤 **masb0ymas**

- Website: http://minangitcamp.com
- Twitter: [@fajriajjha1](https://twitter.com/fajriajjha1)
- Github: [@masb0ymas](https://github.com/masb0ymas)
- LinkedIn: [@aji-ajjha](https://linkedin.com/in/aji-ajjha-58a248b7)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
