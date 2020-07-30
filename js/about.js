let aboutIllo = new Zdog.Illustration({
  element: '.zdog-about-canvas',
  rotate: { x: -Zdog.TAU/16 },
  dragRotate: true,
  onDragStart: function() {
    isSpinning = false;
  },
});

const aboutDistance = 8;

let aboutDot = new Zdog.Shape({
  addTo: aboutIllo,
  translate: { y: -aboutDistance },
  stroke: 10,
  color: '#ffd319',
});
aboutDot.copy({
  translate: { x: -aboutDistance },
  color: '#ff901f',
});
aboutDot.copy({
  translate: { z: aboutDistance },
  color: '#ff2975',
});
aboutDot.copy({
  translate: { x: aboutDistance },
  color: '#f222ff',
});
aboutDot.copy({
  translate: { z: -aboutDistance },
  color: '#8c1eff',
});
aboutDot.copy({
  translate: { y: aboutDistance },
});

function aboutAnimate() {
  aboutIllo.rotate.y += isSpinning ? 0.03 : 0;
  aboutIllo.updateRenderGraph();
  requestAnimationFrame( aboutAnimate );
}

aboutAnimate();


// About Page ///////////////////////////////////////////////////////////
/*
let aboutIllo = new Zdog.Illustration({
  element: '.zdog-about-canvas',
  rotate: { x: -Zdog.TAU/16 },
  dragRotate: true,
  onDragStart: function() {
    isSpinning = false;
  },
});

const aboutDistance = 8;

let aboutDot = new Zdog.Shape({
  addTo: aboutIllo,
  translate: { y: -aboutDistance },
  stroke: 10,
  color: '#ffd319',
});
aboutDot.copy({
  translate: { x: -aboutDistance },
  color: '#ff901f',
});
aboutDot.copy({
  translate: { z: aboutDistance },
  color: '#ff2975',
});
aboutDot.copy({
  translate: { x: aboutDistance },
  color: '#f222ff',
});
aboutDot.copy({
  translate: { z: -aboutDistance },
  color: '#8c1eff',
});
aboutDot.copy({
  translate: { y: aboutDistance },
});

function aboutAnimate() {
  aboutIllo.rotate.y += isSpinning ? 0.03 : 0;
  aboutIllo.updateRenderGraph();
  requestAnimationFrame( aboutAnimate );
}

aboutAnimate();
*/

/*
let illo = new Zdog.Illustration({
  element: '.zdog-home-canvas',
  dragRotate: true,
  // stop rotation when dragging starts
  onDragStart: function() {
    isSpinning = false;
  },
});

var homeGroup = new Zdog.Group({
  addTo: illo,
  translate: { z: 20 },
});

new Zdog.Ellipse({
  addTo: illo,
  diameter: 360,
  stroke: 74,
  color: '#ff2975',
});

new Zdog.Rect({
  addTo: homeGroup,
  width: 290,
  height: 50,
  translate: { y: -125, z: -74 },
  stroke: 12,
  color: '#ffd319',
  fill: true,
});

new Zdog.Rect({
  addTo: homeGroup,
  width: 290,
  height: 50,
  translate: { y: -64, z: -74 },
  stroke: 12,
  color: '#ff901f',
  fill: true,
});

new Zdog.Rect({
  addTo: homeGroup,
  width: 290,
  height: 50,
  translate: { y: -5, z: -74 },
  stroke: 12,
  color: '#ff2975',
  fill: true,
});

new Zdog.Rect({
  addTo: homeGroup,
  width: 290,
  height: 50,
  translate: { y: +55, z: -74 },
  stroke: 12,
  color: '#f222ff',
  fill: true,
});

new Zdog.Rect({
  addTo: homeGroup,
  width: 290,
  height: 50,
  translate: { y: +116, z: -74 },
  stroke: 12,
  color: '#8c1eff',
  fill: true,
});

function animate() {
  // rotate illo each frame
  illo.rotate.y += 0.03;
  illo.updateRenderGraph();
  // animate next frame
  requestAnimationFrame( animate );
}
// start animation
animate();
*/
