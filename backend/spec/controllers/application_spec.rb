require 'rails_helper'

RSpec.describe "Application" do
  describe 'error handling' do
    controller do
      def index
        raise ActionController::BadRequest
      end
    end

    it 'returns bad request' do
      skip 'TODO: fix this test'
      get :index
      expect(response).to have_http_status(:bad_request)
    end
  end
end
