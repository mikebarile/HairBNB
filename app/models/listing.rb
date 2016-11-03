class Listing < ActiveRecord::Base
  validates :title, :host_id, :lat, :lng, :street_address, :city, :zip_code,
    :description, :price, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: :User

end
