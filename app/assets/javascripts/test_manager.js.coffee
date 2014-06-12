
$(document).on 'page:change', ->
    init()

#
# Initializes the page
#
init = () ->
    reloadTestSuites()
    overrideAddWordForm()
    
    $('#new_test_suite').bind('ajax:success', (evt, data, status, xhr) -> reloadTestSuites())
    $('#new_word').bind('ajax:success', (evt, data, status, xhr) -> reloadWords())

@reloadTestSuites = () -> $( ".suitesTbl" ).load( "/test_manager/reload_suites", {} )


#
# Loading Test Suite WORDS
#
selectedSuite = 1

@reloadWords = () ->
    $( ".wordsTbl" ).load( "/test_manager/reload_words", { test_suite_id: selectedSuite } )

@loadSuiteWords = (row, suiteId) -> 
    setSelectedRow(row)
    selectedSuite = suiteId
    reloadWords()
    
    
#
# Adding a word
# 
overrideAddWordForm = () ->
    $('#new_word').submit( () ->
        valuesToSubmit = $(this).serialize();
        valuesToSubmit = valuesToSubmit.substring(0, valuesToSubmit.length - 1)
        valuesToSubmit+=selectedSuite;

        $.ajax({
            url: $(this).attr('action'),
            type:'post',
            data: valuesToSubmit,
            dataType: "JSON"
        }).success( (json) ->
            reloadWords();
        );
        
        return false;
    );


#
# General
#
cleanRowStyles = () ->
    table = document.getElementById("tsTbl")
    for row in table.rows
        $(row).removeClass('success')

setSelectedRow = (row) ->
    cleanRowStyles()
    $(row).parent('tr').addClass('success')