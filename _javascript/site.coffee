# Hamburger menu icon
toggles = document.querySelectorAll('#menu-navigation')

toggleHandler = (toggle) ->
  toggle.addEventListener 'click', (e) ->
    e.preventDefault()
    if @classList.contains('active') == true
      @classList.remove('active')
    else
      @classList.add('active')
    return
  return

i = toggles.length - 1
while i >= 0
  toggle = toggles[i]
  toggleHandler toggle
  i--
