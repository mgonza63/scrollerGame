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

let character;
let cImg;
let eImg;

let cFrames = [];
let numFrames = 9;
let whichCFrame = 0;

let jFrames = [];
let numJFrames = 4;
let whichJFrame = 0;

let enemies = [];

var gameHasStarted = false

let mainText = "PRESS 'S' TO START"

function preload() {
    back = loadImage('layers/bg-1.png');
    mid = loadImage('layers/bg-2.png');
    fore = loadImage('layers/bg-3.png');

    backTrees = loadImage('layers/bg-4.png');
    foreTrees = loadImage('layers/bg-5.png');

    cImg = loadImage('character/1.png');

    for (let i = 1; i < numFrames; i++) {
        let fileName = 'character/run/' + i + '.png';
        let frame = loadImage(fileName);
        cFrames.push(frame);
    }
    // jump frames
    for (let i = 1; i < numJFrames; i++) {
        let fileName = 'character/jump/' + i + '.png';
        let frame = loadImage(fileName);
        jFrames.push(frame);
    }
    font = loadFont('upheavtt.ttf');

}

function setup() {


    // if (mode == 0) {
    //     createCanvas(544, 320);

    // }
        createCanvas(544, 320);
        character = new Character();

        cAnimationX = width/ 2;
        cAnimationY = height / 2


  }

function keyPressed() {
    if (key == 'w') {
        character.jump();
    }
    if (key == 's') {
        gameHasStarted = true;

    }

}

function draw() {
    // console.log(character.jIndex)

    // BACKGROUND LOGIC

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

    bx-=0; bx2-=0;
    mx-=0.2; mx2-=0.2;
    fx-=0.3; fx2-=0.3;
    btx-=0.4; btx2-=0.4;
    ftx-=0.5; ftx2-=0.5;

    textSize(36);
    fill(255);
    textFont(font);
    text(mainText, 110, 170);

    if (gameHasStarted) {
        mainText = ''
        bx-=0.5; bx2-=0.5;
        mx--; mx2--;
        fx-=2; fx2-=2;
        btx-=3; btx2-=3;
        ftx-=4; ftx2-=4;

        if (random(1) <0.01) {
            enemies.push(new Enemy());
        }
        for (let e of enemies) {
            e.move();
            e.show();
            if (character.hits(e)) {
                console.log('Dead');
                noLoop()
            }
        }
    }

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

    // CHARACTER LOGIC

    character.show();
    character.move();

    //  character.jumpAnim()

    if (character.y < 170) {
        character.jumpAnim()
    } else {
        character.run()

    }
    


  }