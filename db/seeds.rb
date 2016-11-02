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