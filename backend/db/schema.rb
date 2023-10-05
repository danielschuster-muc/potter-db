# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_09_23_224046) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pgcrypto"
  enable_extension "plpgsql"

  create_table "books", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "slug"
    t.string "title"
    t.text "summary"
    t.string "author"
    t.date "release_date"
    t.string "dedication"
    t.integer "pages"
    t.text "cover"
    t.text "wiki"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_books_on_slug", unique: true
  end

  create_table "chapters", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "slug"
    t.string "title"
    t.text "summary"
    t.integer "order"
    t.uuid "book_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id"], name: "index_chapters_on_book_id"
    t.index ["slug"], name: "index_chapters_on_slug", unique: true
  end

  create_table "characters", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "slug"
    t.string "name"
    t.string "born"
    t.string "died"
    t.string "gender"
    t.string "species"
    t.string "height"
    t.string "weight"
    t.string "hair_color"
    t.string "eye_color"
    t.string "skin_color"
    t.string "blood_status"
    t.string "marital_status"
    t.text "nationality"
    t.string "animagus"
    t.string "boggart"
    t.string "house"
    t.string "patronus"
    t.text "alias_names", default: [], array: true
    t.text "family_members", default: [], array: true
    t.text "jobs", default: [], array: true
    t.text "romances", default: [], array: true
    t.text "titles", default: [], array: true
    t.text "wands", default: [], array: true
    t.text "image"
    t.text "wiki"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_characters_on_slug", unique: true
  end

  create_table "movies", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "slug"
    t.string "title"
    t.text "summary"
    t.text "directors", default: [], array: true
    t.text "screenwriters", default: [], array: true
    t.text "producers", default: [], array: true
    t.text "cinematographers", default: [], array: true
    t.text "editors", default: [], array: true
    t.text "distributors", default: [], array: true
    t.text "music_composers", default: [], array: true
    t.date "release_date"
    t.string "running_time"
    t.string "budget"
    t.string "box_office"
    t.string "rating"
    t.string "trailer"
    t.text "poster"
    t.string "wiki"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_movies_on_slug", unique: true
  end

  create_table "potions", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "slug"
    t.string "name"
    t.string "effect"
    t.string "side_effects"
    t.string "characteristics"
    t.string "time"
    t.string "difficulty"
    t.string "ingredients"
    t.string "inventors"
    t.string "manufacturers"
    t.text "image"
    t.text "wiki"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_potions_on_slug", unique: true
  end

  create_table "spells", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "slug"
    t.string "name"
    t.string "incantation"
    t.string "category"
    t.string "effect"
    t.string "light"
    t.string "hand"
    t.string "creator"
    t.text "image"
    t.text "wiki"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_spells_on_slug", unique: true
  end

  add_foreign_key "chapters", "books"
end
