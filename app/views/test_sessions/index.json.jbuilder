json.array!(@test_sessions) do |test_session|
  json.extract! test_session, :id, :user_id, :test_number, :start_time, :end_time, :ease_ranking, :fun_ranking, :accuracy_ranking, :test_suite_id, :test_unit_id
  json.url test_session_url(test_session, format: :json)
end
