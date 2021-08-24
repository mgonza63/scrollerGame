class Enemy {
    constructor() {
        this.r = 100;
        this.x = width;
        this.y = height - this.r;

        this.hX = 30;
        this.hY = 60;
    }
    move() {
        this.x -= 5;
    }
    show() {
        image(cImg, this.x, this.y, this.r, this.r);


    }
}