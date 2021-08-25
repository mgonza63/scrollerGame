
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
        this.jIndex = 0;
        this.speed = .2;
        this.jSpeed = .1;
        this.length = cFrames.length;
    }

    jump() {
        if ( this.y == height - this.r) {
            this.vy = -18;
        }
    }

    jumpAnim() {
        // slow down animation
        
        let jIndex = floor(this.jIndex) % jFrames.length;

        // animate
        image(jFrames[jIndex], this.x, this.y, this.r, this.r)
         this.jIndex += this.jSpeed;
         // restart animation at the end of the jump
        if (this.jIndex >= '3.6') {
            this.jIndex = 0;

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

        fill(255, 50);
        rect(this.x + 60, this.y + 80 , this.hX, this.hY);
    }
    run() {
            // slow down animation
            let index = floor(this.index) % this.length;

            // animate
            image(cFrames[index], this.x, this.y, this.r, this.r)
            this.index += this.speed;
    
            // repeat frames
            if (whichCFrame === cFrames.length) {
                whichCFrame = 0;
                } 
            }
}