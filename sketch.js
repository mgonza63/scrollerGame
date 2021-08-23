let back;
let mid;
let fore;

let bx = 0;
let bx2 = 544;

let mx = 0;
let mx2 = 544;

let fx = 0; 
let fx2 = 544;

let btx = 0
let btx2 = 544;

let ftx = 0;
let ftx2 = 544;


function preload() {
    back = loadImage('layers/bg-1.png');
    mid = loadImage('layers/bg-2.png');
    fore = loadImage('layers/bg-3.png');

    backTrees = loadImage('layers/bg-4.png');
    foreTrees = loadImage('layers/bg-5.png');
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

    image(backTrees, btx, 0, width + 2, height);
    image(backTrees, btx2, 0, width + 2, height);

    image(foreTrees, btx, 0, width + 2, height);
    image(foreTrees, btx2, 0, width + 2, height);

    // * Uncomment below for Movement*

    // bx-=0.5; bx2-=0.5;
    // mx--; mx2--;
    // fx-=2; fx2-=2;
    // btx-=3; btx2-=3;
    // ftx-=4; ftx2-=4;


    if(bx <= -544){bx = 544};
    if(bx2 <= -544){bx2 = 544};

    if(mx <= -544){mx = 544;} 
    if(mx2 <= -544){mx2 = 544;}

    if(fx <= -544){fx = 544};
    if(fx2 <= -544){fx2 = 544}

    if(btx <= -544){btx = 544};
    if(btx2 <= -544){btx2 = 544}

    if(ftx <= -544){ftx = 544};
    if(ftx2 <= -544){ftx2 = 544}

    
  }