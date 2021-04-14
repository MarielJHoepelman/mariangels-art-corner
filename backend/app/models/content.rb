class Content < ApplicationRecord
  validates :page_name, uniqueness: true
  has_attached_file :image, styles: { large: "600x600>", medium: "350x350>", thumb: "100x100>" }
  validates_attachment :image, content_type: { content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"] }

  def image_file
    if self.image.present?
      {
        original: ApplicationController.helpers.asset_url(self.image.url(:original)),
        thumb: ApplicationController.helpers.asset_url(self.image.url(:thumb)),
        medium: ApplicationController.helpers.asset_url(self.image.url(:medium)),
        large: ApplicationController.helpers.asset_url(self.image.url(:large)),
      }
    end
  end

  def image_attributes=(attributes)
    image.clear if has_destroy_flag?(attributes) && !image.dirty?
  end
end
