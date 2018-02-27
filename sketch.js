var bubbles;
var me;

function setup() {
  createCanvas(2000, 2000);

  bubbles = Array(1000).fill(0).map(() => {
    let x = random(0, width);
    let y = random(0, height);
    let r = random(0, 50);
    return new Bubble(x, y, r);
  });
  me = new Bubble(0, 0, 50);
}


function draw() {
  background(255);

  for (let i = 0, j = bubbles.length; i < j; i++) {
    let bubble = bubbles[i];

    bubble.shake();
    bubble.morph();
    bubble.show();
  }
  me.x = mouseX;
  me.y = mouseY;
  if (mouseIsPressed){
    me.brightness = 200;
  } else {
    me.brightness = 255;
  }
  me.show()

}


class Bubble {
  constructor(x, y, r = 50) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 255;
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }

  shake() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }

  morph() {
    this.r += random(-1, 1);
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r);
  }
}
