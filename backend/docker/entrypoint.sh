#!/bin/sh
set -e

# Remove a potentially pre-existing server.pid for Rails.
if [ -f tmp/pids/server.pid ]; then
  rm tmp/pids/server.pid
fi

# Run migrations (Safe for single-instance, careful if scaling to multiple replicas)
echo "Running migrations..."
bundle exec rails db:migrate

# Exec the container's main process (CMD in Dockerfile)
exec "$@"
