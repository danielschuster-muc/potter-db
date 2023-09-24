module V1
  class DocumentationController < ApplicationController
    include ActionController::MimeResponds

    def openapi
      yaml = File.read("#{Rails.root}/documentation/v1/openapi.yaml")
      respond_to do |format|
        format.json { render json: YAML.load(yaml).to_json }
        format.yaml { render plain: yaml, content_type: 'text/yaml' }
        format.any { render body: "Wrong format. Please use .json or .yaml." }
      end
    end
  end
end
