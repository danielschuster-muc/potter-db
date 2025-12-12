# config/puma.rb
max_threads_count = ENV.fetch("RAILS_MAX_THREADS") { 5 }
min_threads_count = ENV.fetch("RAILS_MIN_THREADS") { max_threads_count }
threads min_threads_count, max_threads_count

port ENV.fetch("PORT") { 3000 }

environment ENV.fetch("RAILS_ENV") { "production" }

workers Integer(ENV.fetch("WEB_CONCURRENCY") { 2 })

preload_app!

on_worker_boot do
  require "active_record"
  ActiveRecord::Base.connection.reconnect! if defined?(ActiveRecord::Base)
end

# Allow puma to be restarted by `rails restart` command.
plugin :tmp_restart
