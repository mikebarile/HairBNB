json.extract! booking, :id, :host_id, :guest_id, :listing_id, :check_in,
  :check_out, :message, :status

json.host do
  json.extract! booking.host.id, booking.host.first_name, booking.host.email,
    booking.host.image_url
end

json.guest do
  json.extract! booking.guest.id, booking.guest.first_name, booking.guest.email,
    booking.guest.image_url
end

json.listing do
  json.extract! booking.listing.id, booking.listing.title, booking.listing.price,
    booking.listing.state, booking.listing.country, image_url
end
