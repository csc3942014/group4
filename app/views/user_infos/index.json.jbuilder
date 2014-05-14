json.array!(@user_infos) do |user_info|
  json.extract! user_info, :id, :user_id, :first_name, :last_name, :email
  json.url user_info_url(user_info, format: :json)
end
