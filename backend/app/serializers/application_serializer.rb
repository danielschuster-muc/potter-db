class ApplicationSerializer
  include JSONAPI::Serializer

  attributes :slug

  # unless Rails.env.development?
  #   cache_options store: Rails.cache, namespace: 'jsonapi-serializer', expires_in: 1.hour
  # end
end
