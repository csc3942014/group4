
# Initializes the page
$(document).on 'page:change', ->
    init()

init = () ->
    loadKeyboard(gup( "keyboardId" ))

#
# Utilities
#
gup = ( name ) ->
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  regexS = "[\\?&]"+name+"=([^&#]*)";
  regex = new RegExp( regexS );
  results = regex.exec( window.location.href );
    
  if results == null
        return null
  else return results[1];

#
# All the doing stuff
#
loadKeyboard = (keyboardId) ->
    $.ajax({
      url: "/keyboards/" + keyboardId,
      type: "GET",
      dataType: "json"
      success: (data) ->            
            scriptKeyBoard = document.getElementById("scriptKB")
            scriptKeyBoard.src = "/assets/" + data.name + ".js"
    });
    
window.Output = (message) ->
    console.log(message[message.length-1])
    
window.OnEnter = () ->
    console.log("OnEnter")