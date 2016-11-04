# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161104180919) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.string   "city_name",  null: false
    t.string   "state"
    t.string   "country",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "listings", force: :cascade do |t|
    t.string  "title",          null: false
    t.integer "host_id",        null: false
    t.float   "lat",            null: false
    t.float   "lng",            null: false
    t.string  "street_address", null: false
    t.string  "city",           null: false
    t.integer "zip_code",       null: false
    t.integer "apt_num"
    t.string  "description",    null: false
    t.float   "price",          null: false
    t.boolean "dog_walks"
    t.boolean "deluxe_bed"
    t.boolean "house_cat"
    t.boolean "gourmet_food"
    t.boolean "chew_toys"
    t.boolean "frisbee"
    t.boolean "mailman"
    t.boolean "grooming"
    t.boolean "cuddle_buddy"
    t.boolean "indoor_poop"
    t.boolean "indoor_pee"
    t.boolean "barking"
    t.boolean "whining"
    t.boolean "begging"
    t.boolean "shedding"
    t.string  "state"
    t.string  "country",        null: false
    t.string  "image_url",      null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "password_digest",                                                                                                      null: false
    t.string   "session_token",                                                                                                        null: false
    t.string   "email",                                                                                                                null: false
    t.string   "first_name",                                                                                                           null: false
    t.string   "last_name",                                                                                                            null: false
    t.string   "image_url",       default: "https://res.cloudinary.com/dsguwnfdw/image/upload/v1478282849/People/profile_default.png"
    t.datetime "created_at",                                                                                                           null: false
    t.datetime "updated_at",                                                                                                           null: false
    t.boolean  "is_host"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
  end

end
