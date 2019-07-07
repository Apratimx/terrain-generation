function setup() {
  createCanvas(1920, 750);
  strokeCap(SQUARE);
  console.log('------------------- NEW TERRAIN -------------------');
  var hillSeverity = parseFloat(document.getElementById('hillSeverity').value);
  var terrainRes = parseFloat(document.getElementById('terrainRes').value);
  var climbingDirectionChange = parseFloat(document.getElementById('climbingDirectionChange').value);
  var hillPoints = [Math.random() * 2 - 1];
  var climbingDirection = (hillSeverity / 2) - (Math.random() * hillSeverity);
  console.log(climbingDirection);
  if (terrainRes < 1) {
    terrainRes = 1;
  }
  for (var i = 1; i < width / terrainRes; i++) {
    console.log(hillPoints[i - 1]);
    hillPoints[i] = hillPoints[i - 1] + climbingDirection;
    if (i % climbingDirectionChange === 0) {
      climbingDirection = (climbingDirection * 0.3) + (hillSeverity / 2) - (Math.random() * hillSeverity);
      console.log(`climbingDirection: ${climbingDirection}`);
    }
    strokeWeight(terrainRes + 1);
    line(i * terrainRes, height, i * terrainRes, hillPoints[i] + height / 2);
  }
}
