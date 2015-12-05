$(document).foundation()
$('.jsgood').remove()
$.getJSON('/data/thoreau.json', function (quotes) {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  $('#hdt-quote p').html('<quote>&ldquo;' + randomQuote.quote + '&rdquo;' + '<br><br>—Henry David Thoreau</quote>')
})
// if (document.domain != 'brianshumate.com') {
//  var l = location.href
//  var r = document.referrer
//  var m = new Image()
//  m.src = 'http://canarytokens.com/14edetkukotcim641pyfokmp2.jpg?l=' + encodeURI(l) + '&amp;r=' + encodeURI(r)
// }
