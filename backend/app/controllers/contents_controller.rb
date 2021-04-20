class ContentsController < ApplicationController
  def show
    content = Content.find_by_page_name(params[:page_name])
    render :json => content.to_json(:methods => [:image_file, :display_art])
  end
end
