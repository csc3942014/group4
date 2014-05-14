json.array!(@keyboards) do |keyboard|
  json.extract! keyboard, :id, :name, :description
  json.url keyboard_url(keyboard, format: :json)
end
