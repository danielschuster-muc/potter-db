# [POTTER DB: Website](potterdb.com)

This part of the project is used for the website / frontend.

## Technologies

The website is created with the following technologies:

- Next.js v12.3.1
- React v18.2.0
- Node

Therefore make sure that you have installed node / npm.

## Contributing

### Clone the repository

```shell
git clone git@github.com:danielschuster-muc/potter-db.git
cd potter-db/frontend
```

### Install dependencies

Using [NPM](https://www.npmjs.com/):

```shell
npm install
```

### Start the next.js server

You can start the next.js server using the command given below:

```shell
npm run dev
```

You can now visit the development server on http://localhost:3001.

If you want to use a local server for the backend, you can also start the rails server [backend](../backend).
For that you need to create a .env file with `NEXT_PUBLIC_API_URL=http://localhost:3000` as a value.
