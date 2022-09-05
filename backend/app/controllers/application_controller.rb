class ApplicationController < ActionController::API
  include JSONAPI::Filtering
  include JSONAPI::Pagination
  include ErrorExtender
  # include ErrorExtender unless Rails.env.development?

  def jsonapi_meta(resources)
    pagination = jsonapi_pagination_meta(resources)
    {
      pagination: (pagination if pagination.present?),
      copyright: "© #{Date.today.year} Potter DB API",
      generated_at: Time.current
    }.compact
  end

  def jsonapi_page_size(pagination_params)
    per_page = pagination_params[:size].to_f.to_i
    per_page = 25 if per_page > 25 || per_page < 1
    per_page
  end
end
