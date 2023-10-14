require 'rails_helper'

RSpec.describe "Rack::Attack", type: :request do
  include ActiveSupport::Testing::TimeHelpers

  def app
    Rails.application
  end

  before do
    # Enable Rack::Attack for this test
    Rack::Attack.enabled = true
    Rack::Attack.reset!
  end

  after do
    Rack::Attack.enabled = false
  end

  # TODO: fix this test, see: https://github.com/danielschuster-muc/potter-db/pull/733#discussion_r1339217847
  describe "GET /", skip: "disabled as / redirects to docs.potterdb.com" do
    let(:limit) { 900 }
    let(:headers) { { "REMOTE_ADDR" => "1.2.3.4" } }

    context "when number of requests < limit" do
      it "does not change the request status" do
        limit.times do
          get(root_path, headers:)
          expect(response).not_to have_http_status(:too_many_requests)
        end
      end
    end

    context "when number of requests > limit" do
      # rubocop:disable RSpec/ExampleLength
      it "changes the request status to 429" do
        freeze_time do
          (limit + 1).times do |i|
            get(root_path, headers:)
            expect(response).to have_http_status(:too_many_requests) if i > limit
          end
        end

        travel_to(1.hour.from_now) do
          get(root_path, headers:)
          expect(response).to have_http_status(:ok)
        end
      end

      # rubocop:disable RSpec/NestedGroups
      context "when localhost" do
        skip("only run in test") unless Rails.env.test?
        let(:localhost_headers) { { "REMOTE_ADDR" => "127.0.0.1" } }

        it "does not change request status after 1 hour" do
          (limit + 1).times do |i|
            get root_path, headers: localhost_headers
            expect(response).not_to have_http_status(:too_many_requests) if i > limit
          end
        end
      end
      # rubocop:enable RSpec/NestedGroups

      # rubocop:disable RSpec/NestedGroups
      context "when potterdb.com" do
        let(:potterdb_headers) { { "REQUEST_URL" => "https://potterdb.com" } }

        it "does not change request status after 1 hour" do
          (limit + 1).times do |i|
            get root_path, headers: potterdb_headers
            expect(response).not_to have_http_status(:too_many_requests) if i > limit
          end
        end
      end
      # rubocop:enable RSpec/NestedGroups
    end
    # rubocop:enable RSpec/ExampleLength
  end
end
