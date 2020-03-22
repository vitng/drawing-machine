let array = [];
let backgroundColor = 200;

function setup() {
  createCanvas(1200, 800);
  //background(backgroundColor);
//stroke ();
  drawGrid();
  noFill();
}

function draw() {

  if (mouseIsPressed) {
    //change stroke color (random?)
    //stroke (map ( mouseX, 0, 600, 0, 255, true));
    //reversed stroke
    //line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    //line(mouseX, mouseY, pmouseX, pmouseY);
    backgroundColor -= 4;
    background(backgroundColor);


    array.push([mouseX, mouseY]);
    beginShape();
    for (let i = 0; i < array.length; i++) {
      //--->basic drawing for (let i=0; i< array.length-1; i++){
      //line (array [i][0], array[i][1], array[i+1][0], array[i+1][1]);<-----
      curveVertex(array[i][0], array[i][1])

    }
    endShape();
  }

}

function keyTyped() {

  if (key === "s") {
    // save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {
    // display image
    background(255);
    // to clear image
    // } else if ( key === 'c') {
    //clear();

    //}

  }
  return false;

}

function mousePressed() {
  array = [];
  backgroundColor = 200;
}

function drawGrid() {

  let numCells = 20;
  let startColor = color ("lightBlue");
  let endColor = color ("lightPink");
  let fillColor;
fillColor = 200;

//noStroke();
strokeWeight(0.5);
//Question to ask
// ask about Stroke on Grid and when drawing/
// can't save img, screen go back from beginning

  for (let i = 0; i <= width; i += width / numCells) {
    for (let j = 0; j <= height; j += height / numCells) {
//for change grid colors
//if (fillColor === 255) {
  //fillColor = 200;
//} else {
//  fillColor = 255;
//}
      fillColor = lerpColor (startColor, endColor, j / height);
      fill (fillColor);
      rect(i, j, width / numCells, height / numCells);
    }
  }
  //strokeWeight (5);
}
