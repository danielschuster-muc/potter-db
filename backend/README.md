# [POTTER DB: API](https://api.potterdb.com)

This part of the project is used for the backend / api.
If you just want to edit the data of the api, have a look at the [db/data](db/data) folder.
For changes to the api read below.

## Technologies

The API is created with the following technologies:

- Ruby v3.1.2
- Rails v7.0.3
- Postgres v1.1 / v13+

Therefore make sure that you have installed the required programs / tools.

## Contributing

### Clone the repository

```shell
git clone git@github.com:danielschuster-muc/potter-db.git
cd potter-db/backend
```

### Check your Ruby version

```shell
ruby -v
```

The output should start with something like `ruby 3.1.2`.

If not, install the right ruby version using [rbenv](https://github.com/rbenv/rbenv) (may take a while):

```shell
rbenv install 3.1.2
```

### Install dependencies

Using [Bundler](https://github.com/bundler/bundler):

```shell
bundle install
```

### Initialize the database

Run the following commands to create and setup the database:

```shell
rails db:create db:migrate
```

```shell
rails db:seed
```

### Start the rails server

You can start the rails server using the command given below:

```shell
rails s
```

You can now visit the development server on http://localhost:3000.

### Tests

For any code-based changes please make sure that the backend tests run fine.

To run those API run the following command:

```shell
rspec spec
```
