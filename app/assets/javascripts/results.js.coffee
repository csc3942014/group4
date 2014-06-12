
# Initializes the page
$(document).on 'page:change', ->
    init()

init = () ->
    loadResults()

loadResults = () -> $( ".results" ).load( "/results/load_results", {} )