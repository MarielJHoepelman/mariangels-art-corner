class Content < ApplicationRecord
  validates :page_name, uniqueness: true
  has_attached_file :image, styles: { large: "600x600>", medium: "350x350>", thumb: "100x100>" }
  validates_attachment :image, content_type: { content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"] }

  def image_file
    if image.present?
      {
        original: ApplicationController.helpers.asset_url(image.url(:original)),
        thumb: ApplicationController.helpers.asset_url(image.url(:thumb)),
        medium: ApplicationController.helpers.asset_url(image.url(:medium)),
        large: ApplicationController.helpers.asset_url(image.url(:large)),
      }
    end
  end

  def image_attributes=(attributes)
    image.clear if has_destroy_flag?(attributes) && !image.dirty?
  end

  def display_art
    art_content = Content.where(content_type: "art")
    art_content.map do |art|
      {
        page_name: art.page_name,
        title: art.title,
        image_file: art.image_file,
      }
    end
  end
end
