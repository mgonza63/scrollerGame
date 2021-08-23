let back;
let mid;
let fore;

let bx = 0, bx2 = 544;
let mx = 0, mx2 = 544;
let fx = 0;
let fx2 = 544;


function preload() {
    back = loadImage('layers/bg-1.png');
    mid = loadImage('layers/bg-2.png');
    fore = loadImage('layers/bg-3.png');
    fore2 = loadImage('layers/bg-4.png');

    bg4 = loadImage('layers/bg-4.png');
    bg5 = loadImage('layers/bg-5.png');



}

function setup() {

    createCanvas(544, 320);
  }
  
  function draw() {
    background(220);
    image(back, bx, 0, width, height);
    image(back, bx2, 0, width, height);

    image(mid, mx, 0, width, height);
    image(mid, mx2, 0, width, height);

    image(fore, fx, 0, width + 2, height);
    image(fore, fx2, 0, width + 2, height);

    // * Uncomment below for Movement*
    // bx--; bx2--;
    // mx-=2; mx2-=2;
    // fx-=3; fx2-=3;    


    if(bx <= -544){bx = 544};
    if(bx2 <= -544){bx2 = 544};

    if(mx <= -544){mx = 544;} 
    if(mx2 <= -544){mx2 = 544;}

    if(fx <= -544){fx = 544};
    if(fx2 <= -544){fx2 = 544}

    
  }