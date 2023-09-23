module ErrorExtender
  extend ActiveSupport::Concern

  included do
    include JSONAPI::Errors

    rescue_handlers.unshift([StandardError.name, :render_jsonapi_internal_server_error])

    def render_jsonapi_not_found(exception)
      error = error_object(404, exception)
      render jsonapi_errors: [error], status: :not_found
    end

    rescue_from ActionController::BadRequest, with: :render_jsonapi_bad_request
    # rescue_from NoMethodError, with: :render_jsonapi_bad_request
  end

  private

  def render_jsonapi_bad_request(exception)
    error = error_object(400, exception)
    render jsonapi_errors: [error], status: :bad_request
  end

  def error_object(status, exception)
    {
      title: Rack::Utils::HTTP_STATUS_CODES[status],
      status: status.to_s,
      detail: exception.to_s
    }
  end
end
