# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

City.create(city_name: "San Francisco", state: "CA", country: "United States")
City.create(city_name: "New York City", state: "NY", country: "United States")
City.create(city_name: "Washington", state: "DC", country: "United States")

User.create({email: "mikebarile13@gmail.com", password: "password", first_name: "Mike", last_name: "Barile", is_host: false})

Listing.create({
  title: "Charming post-modern kennel",
  price: 294,
  host_id: 1,
  lat: 37.7767,
  lng: 122.4193,
  street_address: "100 Van Ness Avenue",
  city: "San Francisco",
  zip_code: 94102,
  apt_num: 2115,
  description: "Wonderful kennel looking for a pooch to come enjoy! Great views!",
  dog_walks: true,
  deluxe_bed: true,
  house_cat: false,
  gourmet_food: true,
  chew_toys: true,
  frisbee: false,
  mailman: false,
  grooming: false,
  cuddle_buddy: true,
  indoor_poop: true,
  indoor_pee: true,
  barking: true,
  whining: true,
  begging: true,
  shedding: true,
  state: "California",
  country: "United States",
  image_url: "https://res.cloudinary.com/dsguwnfdw/image/upload/v1478136940/Spots/under-the-stairs-dog-bed-polished-concrete-floor-built-in-dog-bed.jpg"
})

Listing.create({
  title: "Rustic dog house with big yard",
  price: 164,
  host_id: 1,
  lat: 4.712857,
  lng: -74.085834,
  street_address: "Ak. 60 #57 – 60",
  city: "Bogota",
  zip_code: 110111,
  apt_num: "",
  description: "Great dog house right behind the Bogota library! Enjoy lunch lectures while chewing on a gourmet steak.",
  dog_walks: false,
  deluxe_bed: false,
  house_cat: true,
  gourmet_food: true,
  chew_toys: true,
  frisbee: true,
  mailman: true,
  grooming: false,
  cuddle_buddy: false,
  indoor_poop: true,
  indoor_pee: true,
  barking: true,
  whining: false,
  begging: false,
  shedding: false,
  state: "",
  country: "Colombia",
  image_url: "https://res.cloudinary.com/dsguwnfdw/image/upload/v1478136937/Spots/_32.jpg"
})

Listing.create({
  title: "Chic innercity bachelor pad",
  price: 450,
  host_id: 1,
  lat: 40.733102,
  lng: -73.976316,
  street_address: "530 East 20th Street",
  city: "New York City",
  zip_code: 10009,
  apt_num: 1334,
  description: "Wonderful kennel looking for a pooch to come enjoy! Great views!",
  dog_walks: false,
  deluxe_bed: true,
  house_cat: true,
  gourmet_food: true,
  chew_toys: true,
  frisbee: true,
  mailman: true,
  grooming: true,
  cuddle_buddy: true,
  indoor_poop: true,
  indoor_pee: false,
  barking: true,
  whining: true,
  begging: true,
  shedding: true,
  state: "New York",
  country: "United States",
  image_url: "https://res.cloudinary.com/dsguwnfdw/image/upload/v1478136942/Spots/ee58f1d8650eb2c5e208930bb711578e.jpg"
})
