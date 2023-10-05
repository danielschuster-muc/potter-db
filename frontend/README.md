# [POTTER DB: Website](https://potterdb.com)

This part of the project is dedicated to the website, which allows users to seamlessly search and access data from our API.

## Technologies

Our website is powered by the following technologies:

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [MUI](https://mui.com/)

## Contributing

Before diving into development, ensure that you have Node.js and npm installed on your system.

The frontend is currently in a mass rebuilding process. See [new-website](https://github.com/danielschuster-muc/potter-db/tree/new-website) branch and [site](https://beta.potterdb.com). PRs to the old frontend will no be accepted.

To contribute to our Website, follow these simple steps:

### 1. Clone the repository and change directory to the frontend folder (make sure to clone from the new-website branch)

```shell
git clone -b new-website git@github.com:danielschuster-muc/potter-db.git
cd potter-db/frontend
```

### 2. Install dependencies

Using [NPM](https://www.npmjs.com/):

```shell
npm install
```

### 3. Start the Next.js Server

You can launch the Next.js server by running the following command:

```shell
npm run dev
```

Now, you can access the development server at http://localhost:3001.

*Feel free to explore and contribute to our project's website. Happy coding 🎉!*

## Using a local backend server

If you prefer using a local server for the backend, you can also start the Rails server found in the [backend](../backend) folder.
To do this, create a .env file in the frontend folder with the following content:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

Afterwards you can start the Rails server by running `rails s` in the backend folder (see [backend/README](../backend/README.md) for more information).
