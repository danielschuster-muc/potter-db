require 'swagger_helper'

RSpec.describe 'V1::Potions' do
  path '/v1/potions' do
    get 'Retrieves a list of potions' do
      tags 'potions'
      description 'Retrieves a list of potions; paginated, sorted and filtered by attributes.'
      operationId 'getPotions'
      produces 'application/vnd.api+json'
      parameter '$ref': '#/components/parameters/page_size'
      parameter '$ref': '#/components/parameters/page_number'
      parameter '$ref': '#/components/parameters/sort_potions'
      parameter '$ref': '#/components/parameters/filter_potions_by'

      response '200', 'A list of potions' do
        schema allOf: [
          {
            type: :object,
            required: %w[data],
            properties: {
              data: {
                type: :array,
                items: { '$ref' => '#/components/schemas/potion' }
              }
            }
          },
          { '$ref' => '#/components/schemas/success_without_data' }
        ]

        run_test!
      end
    end
  end

  path '/v1/potions/{id}' do
    get 'Retrieves a potion' do
      tags 'potions'
      description 'Retrieves a specific potion by id, use "random" to get a random potion.'
      operationId 'getPotion'
      produces 'application/vnd.api+json'
      parameter name: 'id',
                description: "The identifier of the potion. Must be a valid UUID v4 or slug.",
                in: :path,
                required: true,
                schema: {
                  oneOf: [
                    { '$ref' => '#/components/schemas/uuid_path' },
                    { '$ref' => '#/components/schemas/slug_path' }
                  ]
                }

      response '200', 'A single potion' do
        let(:id) { create(:potion).id }

        schema allOf: [
          {
            type: :object, required: %w[data], properties: { data: { '$ref' => '#/components/schemas/potion' } }
          },
          { '$ref' => '#/components/schemas/success_without_data' }
        ]

        run_test!
      end

      response '404', 'Potion not found' do
        let(:id) { 'invalid' }
        schema '$ref' => '#/components/schemas/not_found'
        run_test!
      end
    end
  end
end
