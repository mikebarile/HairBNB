class Booking < ActiveRecord::Base
  validates :host_id, :guest_id, :listing_id, :check_in, :check_out,
  :message, :status, presence: true

  belongs_to :host,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: :User

  belongs_to :guest,
  primary_key: :id,
  foreign_key: :guest_id,
  class_name: :User

  belongs_to :listing,
  primary_key: :id,
  foreign_key: :listing_id,
  class_name: :Listing
  
end
