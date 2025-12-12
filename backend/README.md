# [POTTER DB: API](https://api.potterdb.com)

This part of the project is dedicated to the backend API of the Potter DB application, built with **Ruby on Rails** and **PostgreSQL**.

It uses a **multi-stage Docker setup** to ensure a smooth development experience with hot-reloading, while keeping production images lightweight and secure.
If you're looking to edit the data within the API (especially books and movies), check out the [db/data](db/data) folder.

## Contributing

Follow these steps to get the app running locally:

### 1. Clone the repository and change directory to the backend folder

```shell
git clone git@github.com:danielschuster-muc/potter-db.git
cd potter-db/backend
```

### 2. Setup Environment Variables

Copy the example environment file to create your local configuration:

```bash
cd backend
cp .env.example .env
```

> **Note:** The default settings in `.env.example` are configured for the Docker development environment. You shouldn't need to change them for local use.

### 3. Build and Start the App

We use `compose.dev.yml` for development (which enables hot-reloading).

```bash
docker compose -f compose.dev.yml up --build
```

The API will be available at: `http://localhost:3000`.

### 4. Seed the Database

Once the container is running, open a **new terminal tab** and run the following command to populate the database with our data from [Scrabby](https://github.com/danielschuster-muc/scrabby):

```bash
docker compose -f compose.dev.yml exec web bin/rails db:seed
```

### 5. Access the API Documentation

It's recommended to read the [documentation](https://docs.potterdb.com/) to get a better understanding of the API.

_Feel free to explore and contribute to our project's backend. Happy coding 🎉!_

---

## 💻 Development Workflow

Since the application runs inside a container, you must execute Rails commands via Docker. Below is a quick reference table for common actions:

| Action                           | Command                                                                       |
| :------------------------------- | :---------------------------------------------------------------------------- |
| **Start Server**                 | `docker compose -f compose.dev.yml up`                                        |
| **Stop Server**                  | `docker compose -f compose.dev.yml down`                                      |
| **Rails Console**                | `docker compose -f compose.dev.yml exec web bin/rails c`                      |
| **Run Migrations**               | `docker compose -f compose.dev.yml exec web bin/rails db:migrate`             |
| **Seed Database**                | `docker compose -f compose.dev.yml exec web bin/rails db:seed`                |
| **Rspec Tests**                  | `docker compose -f compose.dev.yml exec web bin/rspec`                        |
| **Lint Code**                    | `docker compose -f compose.dev.yml exec web rubocop`                          |
| **Update Swagger Documentation** | `docker compose -f compose.dev.yml exec web bin/rails rswag:specs:swaggerize` |
| **Lint Swagger Documentation**   | `spectral lint app/documentation/v1/openapi.yml`                              |
| **Update GraphQL Schema**        | `docker compose -f compose.dev.yml exec web bin/rails graphql:schema:dump`    |

---

## Docker Architecture

We use two separate Compose files to handle different environments:

### a. Development (`compose.dev.yml`)

- **Target:** `builder` stage from Dockerfile.
- **Volumes:** Mounts your local code directory (`.`) into the container (`/app`). This means changes you make in your text editor are instantly reflected in the running app (Hot Reloading).
- **Env:** Sets `RAILS_ENV=development`.

### b. Production (`compose.yml`)

- **Target:** `runtime` stage from Dockerfile.
- **Volumes:** Does **not** mount code. It copies the code into the image. This is immutable, faster, and safer.
- **Optimization:** Uses `puma` with preloaded workers for better concurrency.
- **Env:** Sets `RAILS_ENV=production`.

To test the **production build** locally:

```bash
docker compose -f compose.yml up --build
```
