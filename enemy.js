class Enemy {
    constructor() {
        this.r = 100;
        this.x = width;
        this.y = height - this.r
    }
    move() {
        this.x -= 3;
    }
    show() {
        image(cImg, this.x, this.y, this.r, this.r)
    }
}