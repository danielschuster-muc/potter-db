# frozen_string_literal: true

require 'rails_helper'

RSpec.configure do |config|
  # Specify a root folder where Swagger JSON files are generated
  # NOTE: If you're using the rswag-api to serve API descriptions, you'll need
  # to ensure that it's configured to serve Swagger from the same folder
  config.swagger_root = Rails.root.join('app/documentation').to_s

  # To keep your responses clean and validate against a strict schema, uncomment the below line.
  # config.swagger_strict_schema_validation = true

  # Specify the format of the output Swagger file when running 'rswag:specs:swaggerize'.
  # The swagger_docs configuration option has the filename including format in
  # the key, this may want to be changed to avoid putting yaml in json files.
  # Defaults to json. Accepts ':json' and ':yaml'.
  config.swagger_format = :yaml

  # Define one or more Swagger documents and provide global metadata for each one
  # When you run the 'rswag:specs:swaggerize' rake task, the complete Swagger will
  # be generated at the provided relative path under swagger_root
  # By default, the operations defined in spec files are added to the first
  # document below. You can override this behavior by adding a swagger_doc tag to the
  # the root example_group in your specs, e.g. describe '...', swagger_doc: 'v2/swagger.json'
  config.swagger_docs = {
    'v1/openapi.yaml' => {
      openapi: '3.0.3',
      info: {
        title: 'Potter DB API',
        version: 'v1',
        description: "This is the API for Potter DB. It is a RESTful API that uses JSON:API. \
          \n\nFurther links: \
          \n- [potterdb.com](https://potterdb.com) \
          \n- [docs.potterdb.com](https://docs.potterdb.com) \
          \n- [jsonapi.org](https://jsonapi.org)",
        contact: {
          name: 'Support',
          url: 'https://github.com/danielschuster-muc/potter-db/issues'
        },
        license: {
          name: 'MIT',
          url: 'https://opensource.org/licenses/MIT'
        }
      },
      servers: [{ url: "https://api.potterdb.com", description: "Production server" }],
      tags: [
        {
          name: 'books',
          description: 'Books',
          externalDocs: {
            description: 'What are books?',
            url: 'https://docs.potterdb.com/resources/books'
          }
        },
        {
          name: 'characters',
          description: 'Characters',
          externalDocs: {
            description: 'What are characters?',
            url: 'https://docs.potterdb.com/resources/characters'
          }
        },
        {
          name: 'movies',
          description: 'Movies',
          externalDocs: {
            description: 'What are movies?',
            url: 'https://docs.potterdb.com/resources/movies'
          }
        },
        {
          name: 'potions',
          description: 'Potions',
          externalDocs: {
            description: 'What are potions?',
            url: 'https://docs.potterdb.com/resources/potions'
          }
        },
        {
          name: 'spells',
          description: 'Spells',
          externalDocs: {
            description: 'What are spells?',
            url: 'https://docs.potterdb.com/resources/spells'
          }
        }
      ],
      paths: {},
      components: {
        parameters: {
          page_size: {
            name: 'page[size]',
            description: 'The number of returned results per page (between 1 and 100).',
            in: :query,
            required: false,
            schema: {
              type: :integer,
              minimum: 1,
              maximum: 100,
              default: 50
            }
          },
          page_number: {
            name: 'page[number]',
            description: 'The page number of the returned results.',
            in: :query,
            required: false,
            schema: {
              type: :integer,
              minimum: 1,
              default: 1
            }
          },
          sort_books: {
            name: :sort,
            description: 'Sort books by the given field. If prefixed with "-" sort is descending.',
            in: :query,
            required: false,
            schema: {
              type: :array,
              uniqueItems: true,
              minItems: 1,
              items: {
                type: :string,
                enum: Book.ransackable_attributes.product(['', '-']).map { |r, s| "#{s}#{r}" }
              }
            }
          },
          filter_books_by: {
            name: 'filter',
            description: 'Filter books by the given field. Use ransack matchers to filter. \
              See [Ransack Search Matchers] \
              (https://activerecord-hackery.github.io/ransack/getting-started/search-matches/). \
              Example: `{ "filter[title_cont]": "Azkaban" }`',
            in: :query,
            required: false,
            schema: {
              type: :object,
              nullable: true
            }
          },
          sort_chapters: {
            name: :sort,
            description: 'Sort books by the given field. If prefixed with "-" sort is descending.',
            in: :query,
            required: false,
            schema: {
              type: :array,
              uniqueItems: true,
              minItems: 1,
              items: {
                type: :string,
                enum: Chapter.ransackable_attributes.product(['', '-']).map { |r, s| "#{s}#{r}" }
              }
            }
          },
          filter_chapters_by: {
            name: 'filter',
            description: 'Filter chapters by the given field. Use ransack matchers to filter. \
              See [Ransack Search Matchers] \
              (https://activerecord-hackery.github.io/ransack/getting-started/search-matches/). \
              Example: `{ "filter[title_cont]": "Glass" }`',
            in: :query,
            required: false,
            schema: {
              type: :object,
              nullable: true
            }
          },
          sort_characters: {
            name: :sort,
            description: 'Sort characters by the given field. If prefixed with "-" sort is descending.',
            in: :query,
            required: false,
            schema: {
              type: :array,
              uniqueItems: true,
              minItems: 1,
              items: {
                type: :string,
                enum: Character.ransackable_attributes.product(['', '-']).map { |r, s| "#{s}#{r}" }
              }
            }
          },
          filter_characters_by: {
            name: 'filter',
            description: 'Filter characters by the given field. Use ransack matchers to filter. \
              See [Ransack Search Matchers] \
              (https://activerecord-hackery.github.io/ransack/getting-started/search-matches/). \
              Example: `{ "filter[name_cont]": "Weasley" }`',
            in: :query,
            required: false,
            schema: {
              type: :object,
              nullable: true
            }
          },
          sort_movies: {
            name: :sort,
            description: 'Sort movies by the given field. If prefixed with "-" sort is descending.',
            in: :query,
            required: false,
            schema: {
              type: :array,
              uniqueItems: true,
              minItems: 1,
              items: {
                type: :string,
                enum: Movie.ransackable_attributes.product(['', '-']).map { |r, s| "#{s}#{r}" }
              }
            }
          },
          filter_movies_by: {
            name: 'filter',
            description: 'Filter movies by the given field. Use ransack matchers to filter. \
              See [Ransack Search Matchers] \
              (https://activerecord-hackery.github.io/ransack/getting-started/search-matches/). \
              Example: `{ "filter[title_cont]": "Fantastic" }`',
            in: :query,
            required: false,
            schema: {
              type: :object,
              nullable: true
            }
          },
          sort_potions: {
            name: :sort,
            description: 'Sort potions by the given field. If prefixed with "-" sort is descending.',
            in: :query,
            required: false,
            schema: {
              type: :array,
              uniqueItems: true,
              minItems: 1,
              items: {
                type: :string,
                enum: Potion.ransackable_attributes.product(['', '-']).map { |r, s| "#{s}#{r}" }
              }
            }
          },
          filter_potions_by: {
            name: 'filter',
            description: 'Filter potions by the given field. Use ransack matchers to filter. \
              See [Ransack Search Matchers] \
              (https://activerecord-hackery.github.io/ransack/getting-started/search-matches/). \
              Example: `{ "filter[name_cont]": "Age" }`',
            in: :query,
            required: false,
            schema: {
              type: :object,
              nullable: true
            }
          },
          sort_spells: {
            name: :sort,
            description: 'Sort spells by the given field. If prefixed with "-" sort is descending.',
            in: :query,
            required: false,
            schema: {
              type: :array,
              uniqueItems: true,
              minItems: 1,
              items: {
                type: :string,
                enum: Spell.ransackable_attributes.product(['', '-']).map { |r, s| "#{s}#{r}" }
              }
            }
          },
          filter_spells_by: {
            name: 'filter',
            description: 'Filter spells by the given field. Use ransack matchers to filter. \
              See [Ransack Search Matchers] \
              (https://activerecord-hackery.github.io/ransack/getting-started/search-matches/). \
              Example: `{ "filter[name_cont]": "Age" }`',
            in: :query,
            required: false,
            schema: {
              type: :object,
              nullable: true
            }
          }
        },
        schemas: {
          meta: {
            description: 'Meta information about the response.',
            type: :object,
            properties: {
              copyright: { type: :string },
              generated_at: { type: :string, format: :date_time }
            },
            example: {
              copyright: "Copyright © Potter DB #{Time.zone.today.year}",
              generated_at: DateTime.now
            }
          },
          pagination_links: {
            type: :object,
            properties: {
              self: {
                description: 'The current page of data.',
                type: :string,
                nullable: true
              },
              current: {
                description: 'The current page of data.',
                type: :string,
                nullable: true
              },
              first: {
                description: 'The first page of data.',
                type: :string,
                nullable: true
              },
              prev: {
                description: 'The prev page of data.',
                type: :string,
                nullable: true
              },
              next: {
                description: 'The next page of data.',
                type: :string,
                nullable: true
              },
              last: {
                description: 'The last page of data.',
                type: :string,
                nullable: true
              }
            },
            required: %w[self]
          },

          not_found: {
            type: :object,
            properties: {
              errors: {
                type: :array,
                items: {
                  type: :object,
                  properties: {
                    status: { type: :string, enum: ['404'] },
                    title: { type: :string, example: "Not found" }
                  }
                }
              }
            },
            example: {
              errors: [
                { title: 'Not found', status: '404' }
              ]
            }
          },

          # others
          success_without_data: {
            type: :object,
            properties: {
              meta: { '$ref' => '#/components/schemas/meta' },
              links:
                  { '$ref' => '#/components/schemas/pagination_links' }

            }
          },
          uuid_path: {
            type: :string,
            format: :uuid,
            example: 'c1637a49-3cc8-4285-93a1-28e6579f1f20'
          },
          slug_path: {
            type: :string,
            pattern: '^[a-zA-Z0-9](?:[-\w]*[a-zA-Z0-9])?$',
            example: 'harry-potter-and-the-philosopher-s-stone'
          },

          # resource relationships
          to_many_chapters_relationship: {
            type: :array,
            uniqueItems: true,
            items: { '$ref' => '#/components/schemas/to_one_chapter_relationship' },
            example: [{ id: 'c1637a49-3cc8-4285-93a1-28e6579f1f20', type: :chapter }]
          },
          to_one_chapter_relationship: {
            type: :object,
            properties: {
              id: {
                description: 'The unique identifier of the chapter.',
                type: 'string',
                pattern: '^[a-zA-Z0-9](?:[-\w]*[a-zA-Z0-9])?$'
              },
              type: { type: :string, enum: ['chapter'] }
            },
            required: %w[id type]
          },
          to_one_book_relationship: {
            type: :object,
            properties: {
              id: {
                description: 'The unique identifier of the book.',
                type: 'string',
                pattern: '^[a-zA-Z0-9](?:[-\w]*[a-zA-Z0-9])?$'
              },
              type: { type: :string, enum: ['book'] }
            },
            required: %w[id type]
          },

          # resources
          book: {
            description: "Representation of a book.",
            type: :object,
            properties: {
              id: {
                description: 'The unique identifier of the book. Must be a valid UUID v4.',
                type: 'string',
                pattern: '^[a-zA-Z0-9](?:[-\w]*[a-zA-Z0-9])?$',
                example: 'c1637a49-3cc8-4285-93a1-28e6579f1f20'
              },
              type: { type: :string, enum: ['book'] },
              attributes: {
                type: :object,
                properties: {
                  slug: { type: :string, example: "harry-potter-and-the-philosopher-s-stone" },
                  title: { type: :string, example: "Harry Potter and the Philosopher's Stone" },
                  summary: { type: :string, nullable: true },
                  author: { type: :string, nullable: true },
                  release_date: { type: :string, format: :date, nullable: true },
                  dedication: { type: :string, nullable: true },
                  pages: { type: :integer, nullable: true },
                  order: { type: :integer, nullable: true },
                  cover: { type: :string, format: :uri, nullable: true },
                  wiki: { type: :string, format: :uri, nullable: true }
                },
                required: %w[slug title]
              },
              relationships: {
                type: :object,
                properties: {
                  chapters: {
                    type: :object,
                    properties: {
                      data: { '$ref' => '#/components/schemas/to_many_chapters_relationship' }
                    }
                  }
                }
              },
              links: {
                type: :object,
                properties: {
                  self: {
                    type: :string,
                    pattern: "/v1/books/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}",
                    example: "/v1/books/c1637a49-3cc8-4285-93a1-28e6579f1f20"
                  }
                }
              }
            },
            required: %w[id type attributes]
          },
          chapter: {
            description: "Representation of a chapter.",
            type: :object,
            properties: {
              id: {
                description: 'The unique identifier of the chapter. Must be a valid UUID v4.',
                type: 'string',
                pattern: '^[a-zA-Z0-9](?:[-\w]*[a-zA-Z0-9])?$',
                example: 'c1637a49-3cc8-4285-93a1-28e6579f1f20'
              },
              type: { type: :string, enum: ['chapter'] },
              attributes: {
                type: :object,
                properties: {
                  slug: { type: :string, example: "the-boy-who-lived", format: :slug },
                  title: { type: :string, example: "The Boy Who Lived" },
                  summary: { type: :string, nullable: true },
                  order: { type: :integer, nullable: true }
                },
                required: %w[slug title]
              },
              relationships: {
                type: :object,
                properties: {
                  book: {
                    type: :object,
                    properties: {
                      data: { '$ref' => '#/components/schemas/to_one_book_relationship' }
                    }
                  }
                }
              },
              links: {
                type: :object,
                properties: {
                  self: {
                    type: :string,
                    # rubocop:disable Layout/LineLength
                    pattern: "/v1/books/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/chapters/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}",
                    # rubocop:enable Layout/LineLength
                    example:
                      "/v1/books/7f8d9b7c-5a7c-4f7c-9d5a-1d8e6f7a8b9d/chapters/c1637a49-3cc8-4285-93a1-28e6579f1f20"
                  }
                }
              }
            },
            required: %w[id type attributes]
          },
          character: {
            description: "Representation of a character.",
            type: :object,
            properties: {
              id: {
                description: 'The unique identifier of the character. Must be a valid UUID v4.',
                type: 'string',
                pattern: '^[a-zA-Z0-9](?:[-\w]*[a-zA-Z0-9])?$',
                example: 'c1637a49-3cc8-4285-93a1-28e6579f1f20'
              },
              type: { type: :string, enum: ['character'] },
              attributes: {
                type: :object,
                properties: {
                  slug: { type: :string, example: "harry-potter" },
                  name: { type: :string, example: "Harry James Potter" },
                  born: { type: :string, nullable: true },
                  died: { type: :string, nullable: true },
                  gender: { type: :string, nullable: true },
                  species: { type: :string, nullable: true },
                  height: { type: :string, nullable: true },
                  weight: { type: :string, nullable: true },
                  hair_color: { type: :string, nullable: true },
                  eye_color: { type: :string, nullable: true },
                  skin_color: { type: :string, nullable: true },
                  blood_status: { type: :string, nullable: true },
                  marital_status: { type: :string, nullable: true },
                  nationality: { type: :string, nullable: true },
                  animagus: { type: :string, nullable: true },
                  boggart: { type: :string, nullable: true },
                  house: { type: :string, nullable: true },
                  patronus: { type: :string, nullable: true },
                  alias_names: { type: :array, items: { type: :string } },
                  family_members: { type: :array, items: { type: :string } },
                  jobs: { type: :array, items: { type: :string } },
                  romances: { type: :array, items: { type: :string } },
                  titles: { type: :array, items: { type: :string } },
                  wands: { type: :array, items: { type: :string } },
                  image: { type: :string, format: :uri, nullable: true },
                  wiki: { type: :string, format: :uri, nullable: true }
                },
                required: %w[slug name]
              },
              links: {
                type: :object,
                properties: {
                  self: {
                    type: :string,
                    # rubocop:disable Layout/LineLength
                    pattern: "/v1/characters/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}",
                    # rubocop:enable Layout/LineLength
                    example: "/v1/characters/c1637a49-3cc8-4285-93a1-28e6579f1f20"
                  }
                }
              }
            },
            required: %w[id type attributes]
          },
          movie: {
            description: "Representation of a movie.",
            type: :object,
            properties: {
              id: {
                description: 'The unique identifier of the movie. Must be a valid UUID v4.',
                type: 'string',
                pattern: '^[a-zA-Z0-9](?:[-\w]*[a-zA-Z0-9])?$',
                example: 'c1637a49-3cc8-4285-93a1-28e6579f1f20'
              },
              type: { type: :string, enum: ['movie'] },
              attributes: {
                type: :object,
                properties: {
                  slug: { type: :string, example: "harry-potter-and-the-philosopher-s-stone" },
                  title: { type: :string, example: "Harry Potter and the Philosopher's Stone" },
                  summary: { type: :string, nullable: true },
                  director: { type: :array, items: { type: :string } },
                  screenwriters: { type: :array, items: { type: :string } },
                  producers: { type: :array, items: { type: :string } },
                  cinematographers: { type: :array, items: { type: :string } },
                  editors: { type: :array, items: { type: :string } },
                  distributors: { type: :array, items: { type: :string } },
                  music_composers: { type: :array, items: { type: :string } },
                  release_date: { type: :string, nullable: true },
                  running_time: { type: :string, nullable: true },
                  budget: { type: :string, nullable: true },
                  box_office: { type: :string, nullable: true },
                  rating: { type: :string, nullable: true },
                  order: { type: :integer, nullable: true },
                  trailer: { type: :string, format: :uri, nullable: true },
                  image: { type: :string, format: :uri, nullable: true },
                  wiki: { type: :string, format: :uri, nullable: true }
                },
                required: %w[slug title]
              },
              links: {
                type: :object,
                properties: {
                  self: {
                    type: :string,
                    pattern: "/v1/movies/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}",
                    example: "/v1/movies/c1637a49-3cc8-4285-93a1-28e6579f1f20"
                  }
                }
              }
            },
            required: %w[id type attributes]
          },
          potion: {
            description: "Representation of a potion.",
            type: :object,
            properties: {
              id: {
                description: 'The unique identifier of the potion. Must be a valid UUID v4.',
                type: 'string',
                pattern: '^[a-zA-Z0-9](?:[-\w]*[a-zA-Z0-9])?$',
                example: 'c1637a49-3cc8-4285-93a1-28e6579f1f20'
              },
              type: { type: :string, enum: ['potion'] },
              attributes: {
                type: :object,
                properties: {
                  slug: { type: :string, example: "ageing-potion" },
                  name: { type: :string, example: "Ageing Potion" },
                  effect: { type: :string, nullable: true },
                  side_effects: { type: :string, nullable: true },
                  characteristics: { type: :string, nullable: true },
                  time: { type: :string, nullable: true },
                  difficulty: { type: :string, nullable: true },
                  ingredients: { type: :string, nullable: true },
                  inventors: { type: :string, nullable: true },
                  manufacturers: { type: :string, nullable: true },
                  image: { type: :string, format: :uri, nullable: true },
                  wiki: { type: :string, format: :uri, nullable: true }
                },
                required: %w[slug name]
              },
              links: {
                type: :object,
                properties: {
                  self: {
                    type: :string,
                    pattern: "/v1/potions/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}",
                    example: "/v1/potions/c1637a49-3cc8-4285-93a1-28e6579f1f20"
                  }
                }
              }
            },
            required: %w[id type attributes]
          },
          spell: {
            description: "Representation of a spells.",
            type: :object,
            properties: {
              id: {
                description: 'The unique identifier of the spells. Must be a valid UUID v4 or slug.',
                type: 'string',
                pattern: '^[a-zA-Z0-9](?:[-\w]*[a-zA-Z0-9])?$',
                example: 'c1637a49-3cc8-4285-93a1-28e6579f1f20'
              },
              type: { type: :string, enum: ['spell'] },
              attributes: {
                type: :object,
                properties: {
                  slug: { type: :string, example: "age-line" },
                  name: { type: :string, example: "Age Line" },
                  incantation: { type: :string, nullable: true },
                  category: { type: :string, nullable: true },
                  effect: { type: :string, nullable: true },
                  light: { type: :string, nullable: true },
                  hand: { type: :string, nullable: true },
                  creator: { type: :string, nullable: true },
                  image: { type: :string, format: :uri, nullable: true },
                  wiki: { type: :string, format: :uri, nullable: true }
                },
                required: %w[slug name]
              },
              links: {
                type: :object,
                properties: {
                  self: {
                    type: :string,
                    pattern: "/v1/spells/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}",
                    example: "/v1/spells/c1637a49-3cc8-4285-93a1-28e6579f1f20"
                  }
                }
              }
            },
            required: %w[id type attributes]
          }
        }
      }
    }
  }
end
