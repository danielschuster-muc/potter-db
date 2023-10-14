require 'swagger_helper'

RSpec.describe 'V1::Movies' do
  path '/v1/movies' do
    get 'Retrieves a list of movies' do
      tags 'movies'
      description 'Retrieves a list of movies; paginated, sorted and filtered by attributes.'
      operationId 'getMovies'
      produces 'application/vnd.api+json'
      parameter '$ref': '#/components/parameters/page_size'
      parameter '$ref': '#/components/parameters/page_number'
      parameter '$ref': '#/components/parameters/sort_movies'
      parameter '$ref': '#/components/parameters/filter_movies_by'

      response '200', 'A list of movies' do
        schema allOf: [
          {
            type: :object,
            required: %w[data],
            properties: {
              data: {
                type: :array,
                items: { '$ref' => '#/components/schemas/movie' }
              }
            }
          },
          { '$ref' => '#/components/schemas/success_without_data' }
        ]

        run_test!
      end
    end
  end

  path '/v1/movies/{id}' do
    get 'Retrieves a movie' do
      tags 'movies'
      description 'Retrieves a specific movie by id, use "random" to get a random movie.'
      operationId 'getMovie'
      produces 'application/vnd.api+json'
      parameter name: 'id',
                description: "The identifier of the movie. Must be a valid UUID v4 or slug.",
                in: :path,
                required: true,
                schema: {
                  oneOf: [
                    { '$ref' => '#/components/schemas/uuid_path' },
                    { '$ref' => '#/components/schemas/slug_path' }
                  ]
                }

      response '200', 'A single movie' do
        let(:id) { create(:movie).id }

        schema allOf: [
          {
            type: :object, required: %w[data], properties: { data: { '$ref' => '#/components/schemas/movie' } }
          },
          { '$ref' => '#/components/schemas/success_without_data' }
        ]

        run_test!
      end

      response '404', 'Movie not found' do
        let(:id) { 'invalid' }
        schema '$ref' => '#/components/schemas/not_found'
        run_test!
      end
    end
  end
end
