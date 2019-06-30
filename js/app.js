
// Footer quotes
var request = new XMLHttpRequest();
if (document.domain != 'brianshumate.com') {
  var l = location.href
  var r = document.referrer
  var m = new Image()
  m.src = 'http://canarytokens.com/14edetkukotcim641pyfokmp2.jpg?l=' + encodeURI(l) + '&amp;r=' + encodeURI(r)
}
request.open('GET', '/data/quotes.json', true);
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    var randomQuote = data[Math.floor(Math.random() * data.length)]
    serendipity.innerHTML = '<q class="serendipity">' + randomQuote.quote + '</q>';
  } else {
    console.log('nope.')

  }
};
request.onerror = function() {
  console.log('connection error.')
};
request.send();

// Global Zdog!
let globalSpinning = true;

let globalIllo = new Zdog.Illustration({
  element: '.zdg-global-canvas',
  rotate: { x: -Zdog.TAU/16 },
  dragRotate: true,
  onDragStart: function() {
    globalSpinning = false;
  },
});

const globalDistance = 8;

let homeDot = new Zdog.Shape({
  addTo: globalIllo,
  translate: { y: -globalDistance },
  stroke: 10,
  color: '#ffd319',
});
homeDot.copy({
  translate: { x: -globalDistance },
  color: '#ff901f',
});
homeDot.copy({
  translate: { z: globalDistance },
  color: '#ff2975',
});
homeDot.copy({
  translate: { x: globalDistance },
  color: '#f222ff',
});
homeDot.copy({
  translate: { z: -globalDistance },
  color: '#8c1eff',
});
homeDot.copy({
  translate: { y: globalDistance },
});

function globalAnimate() {
  globalIllo.rotate.y += globalSpinning ? 0.03 : 0;
  globalIllo.updateRenderGraph();
  requestAnimationFrame( globalAnimate );
}

globalAnimate();

