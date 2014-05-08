json.array!(@user_attributes) do |user_attribute|
  json.extract! user_attribute, :id, :name, :user_id
  json.url user_attribute_url(user_attribute, format: :json)
end
