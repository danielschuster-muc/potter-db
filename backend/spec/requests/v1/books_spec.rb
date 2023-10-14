require 'swagger_helper'

RSpec.describe 'V1::Books' do
  path '/v1/books' do
    get 'Retrieves a list of books' do
      tags 'books'
      description 'Retrieves a list of books; paginated, sorted and filtered by attributes.'
      operationId 'getBooks'
      produces 'application/vnd.api+json'
      parameter '$ref': '#/components/parameters/page_size'
      parameter '$ref': '#/components/parameters/page_number'
      parameter '$ref': '#/components/parameters/sort_books'
      parameter '$ref': '#/components/parameters/filter_books_by'

      response '200', 'A list of books' do
        schema allOf: [
          {
            type: :object,
            required: %w[data],
            properties: {
              data: {
                type: :array,
                items: { '$ref' => '#/components/schemas/book' }
              }
            }
          },
          { '$ref' => '#/components/schemas/success_without_data' }
        ]

        run_test!
      end
    end
  end

  path '/v1/books/{id}' do
    get 'Retrieves a book' do
      tags 'books'
      description 'Retrieves a specific book by id, use "random" to get a random book.'
      operationId 'getBook'
      produces 'application/vnd.api+json'
      parameter name: 'id',
                description: 'The identifier of the book. Must be a valid UUID v4 or slug.',
                in: :path,
                required: true,
                schema: {
                  oneOf: [
                    { '$ref' => '#/components/schemas/uuid_path' },
                    { '$ref' => '#/components/schemas/slug_path' }
                  ]
                }

      response '200', 'A single book' do
        schema allOf: [
          {
            type: :object, required: %w[data], properties: { data: { '$ref' => '#/components/schemas/book' } }
          },
          { '$ref' => '#/components/schemas/success_without_data' }
        ]

        let(:id) { create(:book).id }

        run_test!
      end

      response '404', 'Book not found' do
        let(:id) { 'invalid' }
        schema '$ref' => '#/components/schemas/not_found'
        run_test!
      end
    end
  end
end
