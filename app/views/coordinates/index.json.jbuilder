json.array!(@coordinates) do |coordinate|
  json.extract! coordinate, :id, :word_id, :x_coordinate, :y_coordinate
  json.url coordinate_url(coordinate, format: :json)
end
