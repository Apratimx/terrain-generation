function setup() {
  createCanvas(600, 600);
  stroke(255);

  frameRate(30);
  strokeCap(SQUARE);

  // draw dirt and grass
    // user vars
  var hillSeverity = document.getElementById('hillSeverity').value; //how strong hills
  var terrainRes = document.getElementById('terrainRes').value; //how small pixels
  var hillRapidness = document.getElementById('hillRapidness').value; //how often to change drawing direction
  var terrainBumpiness = document.getElementById('terrainBumpiness').value; //how much to vary from the normal drawing direction

  var fooGen = 'Math.floor(Math.random() * (hillSeverity * 2 + 1)) - hillSeverity';
  var foo = eval(fooGen);
  var point = foo;
  strokeWeight(terrainRes);
  for (var i = 0; i < 600; i += terrainRes + 1) {
    if (i % ((terrainRes + 1) * hillRapidness) === 0) {
      foo = eval(fooGen);
      console.log('hillSeverity Changed');
    }
    point += foo;
    var drawPoint = 300 - point + (Math.random() - 0.5) * terrainBumpiness;
    console.log(drawPoint);
    line(i, 600, i, drawPoint);
  }
}
