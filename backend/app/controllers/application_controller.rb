class ApplicationController < ActionController::API
  include JSONAPI::Filtering
  include JSONAPI::Pagination
  include ErrorExtender unless Rails.env.development?

  def jsonapi_meta(data)
    pagination = jsonapi_pagination_meta(data)
    {
      pagination: pagination.presence,
      copyright: "Copyright © Potter DB #{Time.zone.today.year}",
      generated_at: generation_date(data, pagination)
    }.compact
  end

  def jsonapi_page_size(pagination_params)
    max_per_page = 100
    per_page = pagination_params[:size].to_f.to_i
    per_page = max_per_page if per_page > max_per_page || per_page < 1
    per_page
  end

  private

  def generation_date(data, pagination)
    (pagination.present? ? data.first.created_at : data.created_at) if data.present?
  end
end
