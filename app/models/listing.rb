class Listing < ActiveRecord::Base
  validates :title, :host_id, :lat, :lng, :street_address, :city, :zip_code,
    :description, :price, :country, :image_url, presence: true

  belongs_to :host,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: :User

  def average_rating
    reviews.average(:rating)
  end

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end
end
