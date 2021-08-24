class Character {
    constructor() {
        this.r =150;
        this.x = 50;
        this.y = height - this.r;
        this.vy = 0;

        this.gravity = 1;

        this.hX = 30;
        this.hY = 60;
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
        image(cImg, this.x, this.y, this.r, this.r);
        fill(255, 50);
        rect(this.x + 60, this.y + 80 , this.hX, this.hY);
    }
}