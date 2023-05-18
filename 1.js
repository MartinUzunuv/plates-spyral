n = 0;

size = 0.5;

cx=window.innerWidth/2
cy=window.innerHeight/2

last1 = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
last2 = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

function draw() {
  //   for(let a= 0; a < Math.PI*10; a +=Math.PI/500){
  //     for(let i = 0; i < Math.PI*10; i+=Math.PI/10){
  //         context.fillStyle='red'
  //     context.fillRect(
  //       window.innerWidth/2 + Math.cos(a+n)*a*10+Math.sin(a)*a*Math.cos(i),
  //     window.innerHeight/2+ Math.sin(a+n)*a*10+ Math.cos(a)*a*Math.sin(i),
  //     size,
  //     size)
  //   }}
  //   for(let a= 0; a < Math.PI*10; a +=Math.PI/500){
  //     for(let i = 0; i < Math.PI*10; i+=Math.PI/10){
  //         context.fillStyle='blue'
  //     context.fillRect(
  //       window.innerWidth/2 + Math.cos(a+n+(Math.PI*2/3))*a*10+Math.sin(a)*a*Math.cos(i),
  //     window.innerHeight/2+ Math.sin(a+n+(Math.PI*2/3))*a*10+ Math.cos(a)*a*Math.sin(i),
  //     size,
  //     size)
  //   }}
  //   for(let a= 0; a < Math.PI*10; a +=Math.PI/500){
  //     for(let i = 0; i < Math.PI*10; i+=Math.PI/10){
  //         context.fillStyle='green'
  //     context.fillRect(
  //       window.innerWidth/2 + Math.cos(a+n+(Math.PI*4/3))*a*10+Math.sin(a)*a*Math.cos(i),
  //     window.innerHeight/2+ Math.sin(a+n+(Math.PI*4/3))*a*10+ Math.cos(a)*a*Math.sin(i),
  //     size,
  //     size)
  //   }}

  for (let a = 0; a < Math.PI * 10; a += Math.PI / 20) {
    context.beginPath();
    for (let i = 0; i < Math.PI * 10; i += Math.PI / 10) {
    //   context.fillStyle = "black";
    //   context.fillRect(
    //     cx +
    //       Math.cos(a + n) * a * 10 +
    //       Math.sin(a) * a * Math.cos(i),
    //     cy +
    //       Math.sin(a + n) * a * 10 +
    //       Math.cos(a) * a * Math.sin(i),
    //     size,
    //     size
    //   );

    //   if (a > Math.PI / 50 && i > Math.PI / 5) {
    //     drawLine(
    //       cx +
    //         Math.cos(a + n) * a * 10 +
    //         Math.sin(a) * a * Math.cos(i),
    //       cy +
    //         Math.sin(a + n) * a * 10 +
    //         Math.cos(a) * a * Math.sin(i),
    //         last1.x,
    //         last1.y
    //     );
    //   }

      last1={x:cx +
      Math.cos(a + n) * a * 10 +
      Math.sin(a) * a * Math.cos(i), y:cy +
      Math.sin(a + n) * a * 10 +
      Math.cos(a) * a * Math.sin(i)}

      context.lineTo(last1.x,last1.y)


    //   if (a > Math.PI / 50 && i > Math.PI / 5) {
    //     drawLine(
    //       cx +
    //         Math.cos(a + n + Math.PI) * a * 10 +
    //         Math.sin(a) * a * Math.cos(i),
    //       cy +
    //         Math.sin(a + n + Math.PI) * a * 10 +
    //         Math.cos(a) * a * Math.sin(i),
    //         last2.x,
    //         last2.y
    //     );
    //   }

    //   last2={x:cx +
    //   Math.cos(a + n + Math.PI) * a * 10 +
    //   Math.sin(a) * a * Math.cos(i), y:cy +
    //   Math.sin(a + n + Math.PI) * a * 10 +
    //   Math.cos(a) * a * Math.sin(i)}

    //   context.fillStyle = "black";
    //   context.fillRect(
    //     window.innerWidth / 2 +
    //       Math.cos(a + n + Math.PI) * a * 10 +
    //       Math.sin(a) * a * Math.cos(i),
    //     window.innerHeight / 2 +
    //       Math.sin(a + n + Math.PI) * a * 10 +
    //       Math.cos(a) * a * Math.sin(i),
    //     size,
    //     size
    //   );



    context.fillStyle='red'
        context.fillRect(
          cx + Math.cos(a+n)*a*10+Math.sin(a)*a*Math.cos(i),
        cy+ Math.sin(a+n)*a*10+ Math.cos(a)*a*Math.sin(i),
        size,
        size)


    }
    context.closePath()
    context.fillStyle = `rgb(${a*i/50},${0},${i/2})`
    context.fill()
  }
}

function update() {
  n -= 0.005;
}
