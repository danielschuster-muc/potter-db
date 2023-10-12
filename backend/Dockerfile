# Use the official Ruby 3.1.2 image as the base image
FROM ruby:3.1.2

# Set the working directory to /app
WORKDIR /app

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    nodejs \
    postgresql-client \
    yarn

# Copy the Gemfile and Gemfile.lock into the image and install gems
COPY Gemfile Gemfile.lock ./
RUN gem install bundler && bundle install --jobs 20 --retry 5

# Copy the rest of the application code into the image
COPY . .

# Expose port 3000 to the Docker host, so we can access it from the outside
EXPOSE 3000

# Run these commands when the container starts
CMD ["sh", "-c", "rails server -b 0.0.0.0"]
