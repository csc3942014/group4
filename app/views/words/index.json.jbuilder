json.array!(@words) do |word|
  json.extract! word, :id, :word, :length, :consecutive_letters
  json.url word_url(word, format: :json)
end
