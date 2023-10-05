require 'swagger_helper'

RSpec.describe 'V1::Chapters' do
  path '/v1/books/{id}/chapters' do
    get 'Retrieves a list of chapters of a given book' do
      tags 'books'
      operationId 'getChapters'
      produces 'application/vnd.api+json'
      parameter '$ref': '#/components/parameters/page_size'
      parameter '$ref': '#/components/parameters/page_number'
      parameter '$ref': '#/components/parameters/sort_chapters'
      parameter '$ref': '#/components/parameters/filter_chapters_by'
      parameter name: :id, in: :path, required: true,
                description: "The unique identifier of the book. Must be a valid UUID v4 or slug.",
                schema: { '$ref' => '#components/schemas/id_path' }

      response '200', 'A list of chapters' do
        let(:id) { create(:book).id }
        schema allOf: [
          {
            type: :object,
            required: %w[data],
            properties: {
              data: {
                type: :array,
                items: { '$ref' => '#/components/schemas/chapter' }
              }
            }
          },
          { '$ref' => '#/components/schemas/success_without_data' }
        ]

        run_test!
      end

      response '404', 'Chapter not found' do
        let(:id) { 'invalid' }
        schema '$ref' => '#/components/schemas/not_found'
        run_test!
      end
    end
  end

  path '/v1/books/{book_id}/chapters/{id}' do
    get 'Retrieves a chapter of a given book' do
      tags 'books'
      description 'Retrieves a specific chapter of a given book by id, use "random" to get a random chapter.'
      operationId 'getChapter'
      produces 'application/vnd.api+json'
      parameter name: :book_id, in: :path, required: true,
                description: "The unique identifier of the book. Must be a valid UUID v4 or slug.",
                schema: { '$ref' => '#components/schemas/id_path' }
      parameter name: :id, in: :path, required: true,
                description: "The unique identifier of the chapter. Must be a valid UUID v4 or slug.",
                schema: { '$ref' => '#components/schemas/id_path' }

      response '200', 'A single chapter' do
        let(:book) { create(:book) }
        let(:chapter) { create(:chapter, book: book) }

        let(:book_id) { book.id }
        let(:id) { chapter.id }

        schema allOf: [
          {
            type: :object, required: %w[data], properties: { data: { '$ref' => '#/components/schemas/chapter' } }
          },
          { '$ref' => '#/components/schemas/success_without_data' }
        ]
        run_test!
      end

      response '404', 'Book or Chapter not found' do
        let(:id) { 'invalid' }
        let(:book_id) { 'invalid' }
        schema '$ref' => '#/components/schemas/not_found'
        run_test!
      end
    end
  end
end
