json.set! :id, review.id
json.set! :title, review.title
json.set! :description, review.description
json.set! :rating, review.rating
json.set! :date, review.updated_at
json.set! :guest_name, review.guest.first_name
