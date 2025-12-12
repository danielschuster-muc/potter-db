# Dockerfile - deterministic bundler path (API-only Rails)

# Stage: builder
FROM ruby:3.1.2-bullseye AS builder

ENV BUNDLE_PATH=/usr/local/bundle \
    BUNDLE_APP_CONFIG=/usr/local/bundle

WORKDIR /app

# Install build dependencies
RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
        build-essential \
        libpq-dev \
        git \
        ca-certificates && \
    rm -rf /var/lib/apt/lists/*

# Ensure the bundle directory exists and is writable
RUN mkdir -p /usr/local/bundle && chown -R root:root /usr/local/bundle

# Copy Gemfile(s) first for Docker layer caching
COPY Gemfile Gemfile.lock ./

# Install bundler pinned to Gemfile.lock (if possible) and install gems to /usr/local/bundle
RUN gem install bundler -v "$(sed -n '1s/^.* //p' Gemfile.lock 2>/dev/null || true)" || true && \
    bundle config set --local path /usr/local/bundle && \
    bundle config set --local without 'development test' && \
    bundle install --jobs 4 --retry 3

# Copy app code
COPY . .

# (No assets precompile for API-only)
# Stage: runtime
FROM ruby:3.1.2-slim-bullseye AS runtime

WORKDIR /app

ENV BUNDLE_PATH="/usr/local/bundle" \
    BUNDLE_WITHOUT="development:test" \
    RAILS_ENV="production"

# Runtime dependencies (minimal)
RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
      libpq5 \
      ca-certificates && \
    rm -rf /var/lib/apt/lists/*

# Create same path in runtime (ensure permission)
RUN mkdir -p /usr/local/bundle && chown -R root:root /usr/local/bundle

# Copy gems and app from builder
COPY --from=builder /usr/local/bundle /usr/local/bundle
COPY --from=builder /app /app

ENV RAILS_ENV=production \
    RACK_ENV=production \
    RAILS_LOG_TO_STDOUT=true \
    RAILS_SERVE_STATIC_FILES=true

EXPOSE 3000

COPY ./docker/entrypoint.sh /usr/bin/docker-entrypoint
RUN chmod +x /usr/bin/docker-entrypoint

ENTRYPOINT ["/usr/bin/docker-entrypoint"]
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]
