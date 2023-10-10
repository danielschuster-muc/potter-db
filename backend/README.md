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

Before diving into development, ensure that you have Ruby installed on your system.

To contribute to our API, follow these simple steps:

### 1. Clone the repository and change directory to the backend folder

```shell
git clone git@github.com:danielschuster-muc/potter-db.git
cd potter-db/backend
```

### 2. Check your Ruby version

Ensure you have Ruby 3.1.2 installed on your system. You can check your Ruby version by running:

```shell
ruby -v
```

If not, you can install it using [rbenv](https://github.com/rbenv/rbenv):

```shell
rbenv install 3.1.2
```

### 3. Install Dependencies

Using [Bundler](https://github.com/bundler/bundler):

```shell
bundle install
```

### 4. Initialize the Database

Create and set up the database by running the following commands:

```shell
rails db:create db:migrate
rails db:seed
```

### 5. Start the rails server

You can start the rails server using the command given below:

```shell
rails s
```

You can now access the development server at http://localhost:3000. It's recommended to read the [documentation](https://docs.potterdb.com/) to get a better understanding of the API.

*Feel free to explore and contribute to our project's backend. Happy coding 🎉!*

### Testing

For any code changes, ensure that the backend tests are running successfully. You can run the API tests using the following command:

```shell
rspec spec
```

### OpenAPI Documentation

Our API is documented using OpenAPI.
To update the documentation, make your changes in [rspec/request](spec/requests) folder and run the following command afterwards:

```shell
rake rswag:specs:swaggerize
```
You can now visit the documentation on http://localhost:3000/v1/openapi or in [app/documentation/v1/openapi.yml](app/documentation/v1/openapi.yml).

### GraphQL Schema
We also provide a GraphQL API. To update the GraphQL schema, make your changes in [app/graphql](app/graphql) and run the following command afterwards:

```shell
rake graphql:schema:dump
```

You can now find the schema dump in [app/graphql/schema.graphql](app/graphql/schema.graphql).


### Docker Container

Install docker on your system
https://www.docker.com/get-started/

After installing docker navigate into POTTER-DB and run the following commands

```shell
cd backend
docker-compose up  ## or docker-compose up -d
```
Wait untill your terminal is similar to the below image
![Alt text](/backend/images/terminal.png)

The container below would be created on your system and can be seen through the docker GUI
![Alt text](/backend/images/dockerGui.png)

localhost:3000 is where you would find the rails server running.

```shell
localhost:3000/v1/characters
```

Debugging issues

If you run into any errors run the following command to see the containers on your system

```shell
docker ps
```
![Alt text](/backend/images/psCommand.png)

Run the following command to get into any specific container

```shell
docker exec -it  <CONTAINER ID>  bash
```