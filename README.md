# student-partner

[![generator-api](https://img.shields.io/badge/built%20with-generator--api-green.svg)](https://github.com/ndelvalle/generator-api)

Student partner app api

## Configure for Production
- Run `yarn run build-babel`
- Open `routes.js` and update the routes imports to point to the build folder

## dependencies

node 6.3.x or later and mongodb

## developing

run mongodd on a separated terminal instance:

```
mongod
```

run the app:

```bash
npm run dev
```

the app runs on `localhost:8080`

## production

_you'll likely be consuming mongodb as a service, so make sure you set the env var to connect to it._

```bash
npm start
```





--------------------------------------------------------------------------------
