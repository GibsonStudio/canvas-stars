

var c;
var Mouse;
var objects = [];
var distanceRequired = 8;
var lastPosition = { x:0, y:0 };
var WIDTH = 800;
var HEIGHT = 600;

function init ()
{

  Mouse = new Mouse({ originElement:"my-canvas" });
  c = new Canvas({width: WIDTH, height: HEIGHT, autoDrawCanvas:false });
  window.addEventListener("resize", function (event) { resizeMe(); });
  window.addEventListener("mousedown", function (event) { mouseDown(event); });

  resizeMe();

  animate();

}



function resizeMe ()
{

  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
  c.width = WIDTH;
  c.height = HEIGHT;

  var el = document.getElementById("my-canvas");
  el.width = WIDTH;
  el.height = HEIGHT;

}



function animate ()
{

  window.requestAnimationFrame(animate);

  c.clear();

  var dist = Math.sqrt(Math.pow((Mouse.x - lastPosition.x), 2) + Math.pow((Mouse.y - lastPosition.y), 2));

  if (dist > distanceRequired) {

    var star = new Star({ x:Mouse.x, y:Mouse.y });
    objects.push(star);

    lastPosition.x = Mouse.x;
    lastPosition.y = Mouse.y;

  }

  for (var i = 0; i < objects.length; i++) {
    objects[i].update();
  }

}



function mouseDown (e)
{

  var explosionElementCount = 40;




  // smoke
  for (var i = 0; i < explosionElementCount; i++) {

    var myX = Mouse.x + 10 - (Math.random() * 20);
    var myY = Mouse.y + 10 - (Math.random() * 20);
    var ex = new Explosion({ x:myX, y:myY });
    objects.push(ex);

  }

  // stars
  for (var i = 0; i < explosionElementCount; i++) {

    var star = new Star({ x:Mouse.x, y:Mouse.y });
    objects.push(star);

  }

}












//
