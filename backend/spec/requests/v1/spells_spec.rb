require 'swagger_helper'

RSpec.describe 'V1::Spells' do
  path '/v1/spells' do
    get 'Retrieves a list of spells' do
      tags 'spells'
      description 'Retrieves a list of spells; paginated, sorted and filtered by attributes.'
      operationId 'getSpells'
      produces 'application/vnd.api+json'
      parameter '$ref': '#/components/parameters/page_size'
      parameter '$ref': '#/components/parameters/page_number'
      parameter '$ref': '#/components/parameters/sort_spells'
      parameter '$ref': '#/components/parameters/filter_spells_by'

      response '200', 'A list of spells' do
        schema allOf: [
          {
            type: :object,
            required: %w[data],
            properties: {
              data: {
                type: :array,
                items: { '$ref' => '#/components/schemas/spell' }
              }
            }
          },
          { '$ref' => '#/components/schemas/success_without_data' }
        ]

        run_test!
      end
    end
  end

  path '/v1/spells/{id}' do
    get 'Retrieves a spell' do
      tags 'spells'
      description 'Retrieves a specific spell by id, use "random" to get a random spell.'
      operationId 'getSpell'
      produces 'application/vnd.api+json'
      parameter name: 'id',
                description: "The identifier of the spell. Must be a valid UUID v4 or slug.",
                in: :path,
                required: true,
                schema: {
                  oneOf: [
                    { '$ref' => '#/components/schemas/uuid_path' },
                    { '$ref' => '#/components/schemas/slug_path' }
                  ]
                }

      response '200', 'A single spell' do
        let(:id) { create(:spell).id }

        schema allOf: [
          {
            type: :object, required: %w[data], properties: { data: { '$ref' => '#/components/schemas/spell' } }
          },
          { '$ref' => '#/components/schemas/success_without_data' }
        ]

        run_test!
      end

      response '404', 'Spell not found' do
        let(:id) { 'invalid' }
        schema '$ref' => '#/components/schemas/not_found'
        run_test!
      end
    end
  end
end
