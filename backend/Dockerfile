# Stage: builder
FROM ruby:3.1.2-bullseye AS builder

ENV BUNDLE_PATH=/usr/local/bundle \
    BUNDLE_APP_CONFIG=/usr/local/bundle

WORKDIR /app

RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
        build-essential \
        libpq-dev \
        git \
        ca-certificates && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir -p /usr/local/bundle && chown -R root:root /usr/local/bundle

COPY Gemfile Gemfile.lock ./

RUN gem install bundler -v "$(sed -n '1s/^.* //p' Gemfile.lock 2>/dev/null || true)" || true && \
    bundle config set --local path /usr/local/bundle && \
    bundle config set --local without 'development test' && \
    bundle install --jobs 4 --retry 3

COPY . .

# Stage: runtime
FROM ruby:3.1.2-slim-bullseye AS runtime

WORKDIR /app

ENV BUNDLE_PATH="/usr/local/bundle" \
    BUNDLE_WITHOUT="development:test" \
    RAILS_ENV="production"

RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
      libpq5 \
      ca-certificates && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir -p /usr/local/bundle && chown -R root:root /usr/local/bundle

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
