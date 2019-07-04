function setup() {
  console.log('---- NEW TERRAIN ---- ---- NEW TERRAIN ---- ---- NEW TERRAIN ----');
  createCanvas(800, 500);
  background(133, 197, 255);
  strokeCap(SQUARE);

  // draw dirt and grass
    // user vars

  var hillSeverity = parseInt(document.getElementById('hillSeverity').value); //how strong hills
  var terrainRes = parseInt(document.getElementById('terrainRes').value); //how small pixels
  var hillRapidness = parseInt(document.getElementById('hillRapidness').value); //how often to change drawing direction
  var terrainBumpiness = parseInt(document.getElementById('terrainBumpiness').value); //how much to vary from the normal drawing direction
  console.log(`${hillSeverity}, ${terrainRes}, ${hillRapidness}, ${terrainBumpiness}`);

  var fooGen = 'Math.floor(Math.random() * (hillSeverity * 2 + 1)) - hillSeverity';
  var foo = eval(fooGen) * 2;
  var point = foo;
  var tops = [];
  strokeWeight(terrainRes);
  for (var i = 0; i < width + terrainRes; i += terrainRes) {
    if (i % (terrainRes * hillRapidness) === 0) {
      foo = eval(fooGen);
      console.log('hillSeverity Changed');
    }
    point += foo;
    var drawPoint = (height * 0.7) + point + (Math.random() - 0.5) * terrainBumpiness;
    console.log(drawPoint);
    stroke(79, 60, 39);
    line(i, 600, i, drawPoint);
    stroke(29, 173, 0);
    line(i, drawPoint - 10, i, drawPoint + 2);
    tops[tops.length] = Math.ceil(drawPoint - 10);
  }
  console.log(tops.length);
  for (var i = 1; i < 6; i++) {
    tree((width / 5) * i, tops[tops / i]);
  }

}
function tree(x, y) {
  stroke(74, 70, 56);
  strokeWeight(12);
  var trunkTop = 25 + Math.floor(Math.random() * 20);
  line(x, y, x, y - trunkTop);
  stroke(35, 204, 66);
  fill(35, 204, 66);
  circle(x, y - trunkTop * 1.5, trunkTop);

}
