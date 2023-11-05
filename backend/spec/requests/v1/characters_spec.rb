require 'swagger_helper'

RSpec.describe 'V1::Characters' do
  path '/v1/characters' do
    get 'Retrieves a list of characters' do
      tags 'characters'
      description 'Retrieves a list of characters; paginated, sorted and filtered by attributes.'
      operationId 'getCharacters'
      produces 'application/vnd.api+json'
      parameter '$ref': '#/components/parameters/page_size'
      parameter '$ref': '#/components/parameters/page_number'
      parameter '$ref': '#/components/parameters/sort_characters'
      parameter '$ref': '#/components/parameters/filter_characters_by'

      response '200', 'A list of characters' do
        schema allOf: [
          {
            type: :object,
            required: %w[data],
            properties: {
              data: {
                type: :array,
                items: { '$ref' => '#/components/schemas/character' }
              }
            }
          },
          { '$ref' => '#/components/schemas/success_without_data' }
        ]

        run_test!
      end
    end
  end

  path '/v1/characters/{id}' do
    get 'Retrieves a character' do
      tags 'characters'
      description 'Retrieves a specific character by id, use "random" to get a random character.'
      operationId 'getCharacter'
      produces 'application/vnd.api+json'
      parameter name: 'id',
                description: "The identifier of the character. Must be a valid UUID v4 or slug.",
                in: :path,
                required: true,
                schema: {
                  oneOf: [
                    { '$ref' => '#/components/schemas/uuid_path' },
                    { '$ref' => '#/components/schemas/slug_path' }
                  ]
                }

      response '200', 'A single character' do
        let(:id) { create(:character).id }

        schema allOf: [
          {
            type: :object, required: %w[data], properties: { data: { '$ref' => '#/components/schemas/character' } }
          },
          { '$ref' => '#/components/schemas/success_without_data' }
        ]

        run_test!
      end

      response '404', 'Character not found' do
        let(:id) { 'invalid' }
        schema '$ref' => '#/components/schemas/not_found'
        run_test!
      end
    end
  end
end
