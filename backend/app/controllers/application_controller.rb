class ApplicationController < ActionController::API
  include JSONAPI::Filtering
  include JSONAPI::Pagination
  include ErrorExtender unless Rails.env.development?

  def jsonapi_meta(resources)
    pagination = jsonapi_pagination_meta(resources)
    {
      pagination: pagination.presence,
      copyright: "Copyright © Potter DB #{Time.zone.today.year}",
      generated_at: DateTime.now
    }.compact
  end

  def jsonapi_page_size(pagination_params)
    max_per_page = 100
    per_page = pagination_params[:size].to_f.to_i
    per_page = max_per_page if per_page > max_per_page || per_page < 1
    per_page
  end
end
