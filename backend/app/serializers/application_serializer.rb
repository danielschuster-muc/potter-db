class ApplicationSerializer
  include JSONAPI::Serializer
  singleton_class.include Rails.application.routes.url_helpers

  attributes :slug

  link(:self) { |object| url_for([:v1, object, { only_path: true }]) }
end
