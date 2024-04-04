# [POTTER DB: API](https://api.potterdb.com)

This part of the project is dedicated to the API, which provides the data for our website.
If you're looking to edit the data within the API (especially books and movies), check out the [db/data](db/data) folder.
For making changes to the API itself, read on.

## Technologies

The API is powered by the following technologies:

- [Ruby on Rails](https://rubyonrails.org/)
- [PostgreSQL](https://www.postgresql.org/)

Before you begin, please ensure you have the necessary programs and tools installed.

## Contributing

You can setup the project using either Ruby or Docker. Choose the option that fits you the best. Therefore make sure to install the required dependencies before diving into development.

To contribute to our API, follow these simple steps:

### 1. Clone the repository and change directory to the backend folder

```shell
git clone git@github.com:danielschuster-muc/potter-db.git
cd potter-db/backend
```

### 2. Prerequisites

Ensure you have Docker on your system. You can check your Docker version by running:

```shell
docker -v
```
If not, install docker on your system:

https://www.docker.com/get-started/

### 3. Install Dependencies

Run the following command in your terminal

```shell
docker compose up --build
```

### 4. Initialize the Database

```shell
docker compose exec web /bin/sh -c "rails db:create && rails db:migrate && rails db:seed"
```
### 5. Start the rails server

You can start the rails server using the command given below:

```shell
docker compose exec web /bin/sh -c "rails server -b 0.0.0.0"
```

The development server is accessible at http://localhost:3000. It's recommended to read the [documentation](https://docs.potterdb.com/) to get a better understanding of the API.

*Feel free to explore and contribute to our project's backend. Happy coding 🎉!*

### Testing

For any code changes, ensure that the backend tests are running successfully. You can run the API tests using the following command:

```shell
docker compose exec web rspec
```

### Rubocop Linter

We use [Rubocop](https://github.com/rubocop/rubocop) to lint our code. To run the linter, use the following command:

```shell
docker compose exec web bundle exec rubocop
```

### OpenAPI Documentation

Our API is documented using OpenAPI.
To update the documentation, make your changes in [rspec/request](spec/requests) folder and run the following command afterwards:

```shell
docker compose exec web rails rswag:specs:swaggerize
```
You can now visit the documentation on http://localhost:3000/v1/openapi or in [app/documentation/v1/openapi.yml](app/documentation/v1/openapi.yml).

To validate the documentation, run the following command:

```shell
spectral lint app/documentation/v1/openapi.yml
```

### GraphQL Schema
We also provide a GraphQL API. To update the GraphQL schema, make your changes in [app/graphql](app/graphql) and run the following command afterwards:

```shell
docker compose exec web rails graphql:schema:dump
```

You can now find the schema dump in [app/graphql/schema.graphql](app/graphql/schema.graphql).
