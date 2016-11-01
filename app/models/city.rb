class City < ActiveRecord::Base
  validates :city_name, :state, :country, presence: true
end
