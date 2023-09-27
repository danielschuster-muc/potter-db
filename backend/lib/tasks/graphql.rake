require "graphql/rake_task"
GraphQL::RakeTask.new(schema_name: "ApiSchema", directory: "app/graphql")
