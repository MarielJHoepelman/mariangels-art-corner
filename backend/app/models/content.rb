class Content < ApplicationRecord
  validates :page_name, uniqueness: true
end
