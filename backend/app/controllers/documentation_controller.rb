class DocumentationController < ApplicationController
  include ActionController::MimeResponds

  def openapi
    yaml = File.read("#{Rails.root}/docs/v1/openapi.yaml")
    respond_to do |format|
      format.json { render json: YAML.load(yaml).to_json }
      format.any { render plain: yaml, content_type: 'text/yaml' }
    end
  end
end
