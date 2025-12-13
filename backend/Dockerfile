# Use a newer, different OS base to force a fresh download
FROM ruby:3.1.4-slim-bookworm

WORKDIR /app

# Install dependencies
# We use 'slim' so we need to add build tools back in for gems
RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    git \
    curl \
    pkg-config && \
    rm -rf /var/lib/apt/lists/*

# Setup Bundler
COPY Gemfile Gemfile.lock ./
RUN gem install bundler && bundle install --jobs 4 --retry 3

# Copy App
COPY . .

# Production Config
ENV RAILS_ENV=production \
    RAILS_LOG_TO_STDOUT=true \
    RAILS_SERVE_STATIC_FILES=true

EXPOSE 3000

# Start Command (Directly in Dockerfile to avoid file permission issues)
CMD ["/bin/sh", "-c", "rm -f tmp/pids/server.pid && bundle exec rails db:migrate && bundle exec puma -C config/puma.rb"]
