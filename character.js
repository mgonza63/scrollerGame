// let cFrames = [];
// let numFrames = 8;
// let cAnimationX, cAnimationY;
// let whichCFrame = 1;

// function preload() {
//     for (let i = 1; i < numFrames; i++) {
//         let fileName = 'character/run/' + i + '.png';
//         let frame = loadImage(fileName);
//         cFrames.push(frame);
//     }
// }
class Character {
    constructor() {
        this.r =150;
        this.x = 50;
        this.y = height - this.r;
        this.vy = 0;

        this.gravity = 1;

        this.hX = 30;
        this.hY = 60;

        this.index = 0;
        this.speed = .2;
        this.length = cFrames.length;
    }

    jump() {
        if ( this.y == height - this.r) {
            this.vy = -18;
        }
    }
    hits(enemy) {
        fill(255,50)
        rect(enemy.x + 40, enemy.y + 50, enemy.r - 80, enemy.r - 50)

      return collideRectRect(this.x + 60, this.y + 80, this.hX , this.hY, enemy.x + 40, enemy.y + 50, enemy.r - 80, enemy.r - 50)
    }
    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.r);
    }
    show() {
        // slow down animation
        let index = floor(this.index) % this.length;
        image(cFrames[index], this.x, this.y, this.r, this.r)
        this.index += this.speed;

        if (whichCFrame === cFrames.length) {
            whichCFrame = 0;
        } 
        // image(cImg, this.x, this.y, this.r, this.r);
        fill(255, 50);
        rect(this.x + 60, this.y + 80 , this.hX, this.hY);
    }
}