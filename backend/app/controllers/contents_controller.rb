class ContentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
    @content = Content.find_by_page_name(params[:page_name])
    render json: @content.to_json
  end
end
