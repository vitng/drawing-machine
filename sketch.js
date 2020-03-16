let array = [];

function setup() {
  createCanvas(2000,900);
  background(255);
  strokeWeight(5);
  noFill();
}

function draw() {

  if (mouseIsPressed) {
    //change stroke color (random?)
    //stroke (map ( mouseX, 0, 600, 0, 255, true));
    //reversed stroke
    //line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    //line(mouseX, mouseY, pmouseX, pmouseY);
    background (0);
    array.push([mouseX, mouseY]);

  }

}

function keyTyped() {

  if (key === "s") {
    // save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {
    // display image
    background (255);

    beginShape();
    for (let i = 0; i < array.length; i++) {
      //--->basic drawing for (let i=0; i< array.length-1; i++){
      //line (array [i][0], array[i][1], array[i+1][0], array[i+1][1]);<-----
      curveVertex(array[i][0], array[i][1])

  }
  endShape();
}
  return false;

}
