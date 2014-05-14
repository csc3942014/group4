json.array!(@test_units) do |test_unit|
  json.extract! test_unit, :id, :test_session_id, :word_id, :num_backspace, :start_time, :end_time
  json.url test_unit_url(test_unit, format: :json)
end
