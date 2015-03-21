# Hamburger menu icon
$(document).ready ->
  $('#menu-navigation').click (evt) ->
    evt.preventDefault()
    $(this).toggleClass 'active'
    $('#navigation').toggleClass 'active'
    return
  return
