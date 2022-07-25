# [POTTER DB: API](apipotterdb.com)

A complete Potter DB API containing information about books, movies, spells, potions, characters and much more.

## Table of contents

- [Technologies](#technologies)
- [Contribution](#contributing)
- [License](#license)

## Technologies

Project is created with:

- Ruby v3.0.3
- Rails v7.0.3
- Postgres v1.1

## Contributing

### Clone the repository

```shell
git clone git@github.com:danielschuster-muc/potter-db-api.git
cd potter-db-api
```

### Check your Ruby version

```shell
ruby -v
```

The output should start with something like `ruby 3.0.3`.

If not, install the right ruby version using [rbenv](https://github.com/rbenv/rbenv) (may take a while):

```shell
rbenv install 3.0.3
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
rails import:json
```

### Start the rails server

You can start the rails server using the command given below.

```shell
rails s
```

Now you can visit the development server with the URL http://localhost:3000.

### Run tests

To run API tests (e.g. for api routes or models) run the following commands.

```shell
rspec spec
```

## License

The Potter DB API is available as open source under the [MIT License](http://opensource.org/licenses/MIT).
