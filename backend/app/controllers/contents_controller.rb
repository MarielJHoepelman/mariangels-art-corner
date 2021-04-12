class ContentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
    content = Content.find_by_page_name(params[:page_name])
    # render json: {
    #   page_name: content.page_name,
    #   title: content.title,
    #   body: content.body,
    #   images: content.attachments
    # }
    # render json: content.to_json
    # render json: content.as_json(include: { images: images(content) })
    render :json => content.to_json(:methods => [:image_file])
  end

  private

  def images(content)
    content.images.map { |e| url_for(e)  }
  end
end
