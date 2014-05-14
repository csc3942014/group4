json.array!(@test_suite_words) do |test_suite_word|
  json.extract! test_suite_word, :id, :test_suite_id, :word_id
  json.url test_suite_word_url(test_suite_word, format: :json)
end
