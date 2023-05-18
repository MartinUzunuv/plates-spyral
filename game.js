n = -0.5;

size = 0.5;

cx=window.innerWidth/2
cy=window.innerHeight/2

last1 = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
last2 = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

function draw() {
  

  for (let a = 0; a < Math.PI * 10; a += Math.PI / 20) {
    context.beginPath();
    for (let i = 0; i < Math.PI * 10; i += Math.PI / 10) {
    

      last1={x:cx +
      Math.cos(a + n) *(a/(mouseX/300)) * 10 +
      Math.sin(a) * (a*Math.sin(mouseX/300)) * Math.cos(i+n), y:cy +
      Math.sin(a + n) * (a/(mouseY/150)) * 10 +
      Math.cos(a) * (a*Math.cos(mouseX/300)) * Math.sin(i)}

      context.lineTo(last1.x,last1.y)

    // context.fillStyle='red'
    //     context.fillRect(last1.x,last1.y,1,1)


    }
    context.closePath()
    context.fillStyle = `rgb(${a*i/50},${0},${i/2})`
    context.fill()
  }
}

function update() {
  n -= 0.005;
}
