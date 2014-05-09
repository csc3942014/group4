# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20140508235316) do

  create_table "attributes", force: true do |t|
    t.string   "name",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "coordinates", force: true do |t|
    t.integer  "word_id"
    t.decimal  "x_coordinate", precision: 10, scale: 0
    t.decimal  "y_coordinate", precision: 10, scale: 0
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "keyboards", force: true do |t|
    t.string   "name"
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "roles", force: true do |t|
    t.string   "name",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "test_sessions", force: true do |t|
    t.integer  "user_id",          null: false
    t.integer  "test_number",      null: false
    t.datetime "start_time"
    t.datetime "end_time"
    t.integer  "ease_ranking",     null: false
    t.integer  "fun_ranking",      null: false
    t.integer  "accuracy_ranking", null: false
    t.integer  "test_suite_id",    null: false
    t.integer  "test_unit_id",     null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "test_sessions", ["test_suite_id"], name: "index_test_sessions_on_test_suite_id", using: :btree
  add_index "test_sessions", ["test_unit_id"], name: "index_test_sessions_on_test_unit_id", using: :btree
  add_index "test_sessions", ["user_id"], name: "index_test_sessions_on_user_id", using: :btree

  create_table "test_suite_words", force: true do |t|
    t.integer  "test_suite_id", null: false
    t.integer  "word_id",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "test_suite_words", ["test_suite_id"], name: "index_test_suite_words_on_test_suite_id", using: :btree

  create_table "test_suites", force: true do |t|
    t.string   "name",        null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "keyboard_id"
  end

  create_table "test_units", force: true do |t|
    t.integer  "test_session_id", null: false
    t.integer  "word_id",         null: false
    t.datetime "start_time"
    t.datetime "end_time"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "num_backspace",   null: false
  end

  add_index "test_units", ["test_session_id"], name: "index_test_units_on_test_session_id", using: :btree

  create_table "user_attributes", force: true do |t|
    t.integer  "user_id",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "attribute_id"
  end

  add_index "user_attributes", ["user_id"], name: "index_user_attributes_on_user_id", using: :btree

  create_table "user_infos", force: true do |t|
    t.integer  "user_id",    null: false
    t.string   "first_name", null: false
    t.string   "last_name",  null: false
    t.string   "email",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "user_infos", ["user_id"], name: "index_user_infos_on_user_id", using: :btree

  create_table "user_roles", force: true do |t|
    t.string   "name"
    t.integer  "role_id",    null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "user_roles", ["name"], name: "index_user_roles_on_name", using: :btree
  add_index "user_roles", ["role_id"], name: "index_user_roles_on_role_id", using: :btree
  add_index "user_roles", ["user_id"], name: "index_user_roles_on_user_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  create_table "words", force: true do |t|
    t.string   "word",                null: false
    t.integer  "length",              null: false
    t.integer  "consecutive_letters", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
