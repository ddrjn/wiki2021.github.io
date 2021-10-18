let imgset = new Array();
let imgsnum = 50;
let floaterset = new Array();
let difn = 5;
let cnt = 0;

let imgsize;

function preload() {



    imgset[0] = loadImage("res/img/floater/bacteria.png");
    imgset[1] = loadImage("res/img/floater/cell.png");
    imgset[2] = loadImage("res/img/floater/dna.png");
    imgset[3] = loadImage("res/img/floater/tooth.png");
    imgset[4] = loadImage("res/img/floater/tooth1.png");







}


function setup() {
    imgsize = window.innerWidth / 100;
    // imgset[0].resize(imgsize, imgsize);
    // imgset[1].resize(imgsize, imgsize);
    // imgset[2].resize(imgsize, imgsize);
    // imgset[3].resize(imgsize, imgsize);
    // imgset[4].resize(imgsize, imgsize);



    var a = document.getElementById("toothcanvascontainer").getBoundingClientRect().top + document.documentElement.scrollTop;
    var b = document.getElementById("toothcanvascontainer").clientHeight;
    myCanvas = createCanvas(window.innerWidth, b);

    myCanvas.parent("toothcanvascontainertop");
    myCanvas.id("dradadadada");
    document.getElementById("dradadadada").style.position = "absolute";
    document.getElementById("dradadadada").style.top = `${a}px`;
    document.getElementById("dradadadada").style.zIndex = "0";
    myCanvas.background('rgba(255,255,255, 0)');
    fill(0);
    for (var i = 0; i < imgsnum; i++) {

        floaterset[i] = new floater(imgset[cnt], random(window.innerWidth - imgsize), random(height - imgsize));
        cnt++;
        cnt %= difn;
    }


}


function windowResized() {
    var b = document.getElementById("toothcanvascontainer").clientHeight;
    resizeCanvas(window.innerWidth, b);
    imgsize = window.innerWidth / 100;

    for (var i = 0; i < imgsnum; i++) {

        floaterset[i] = new floater(imgset[cnt], random(window.innerWidth - imgsize), random(height - imgsize));
        cnt++;
        cnt %= difn;
        floaterset[i].res();
    }

}


function draw() {
    clear();
    for (var i = 0; i < imgsnum; i++) {
        floaterset[i].moveabout();
        floaterset[i].display();
        floaterset[i].getdist(mouseX, mouseY);

    }




}



class floater {
    colors = new Array();


    speed = 2;
    bigger = false;
    constructor(img, w, h) {
        this.colors[0] = color(91, 105, 170);
        this.colors[1] = color(136, 142, 186);
        this.colors[2] = color(105, 107, 123);
        this.colors[3] = color(203, 171, 200);
        this.colors[4] = color(251, 165, 142);
        this.colors[5] = color(234, 190, 155);

        this.img = img;
        this.vector = createVector(random(-this.speed, this.speed), random(-this.speed, this.speed));
        this.pos = createVector(w, h);
        this.imgsize = window.innerWidth / 100;
        this.col = this.colors[int(random(6))];
    }

    moveabout() {

        this.pos.x += this.vector.x;
        this.pos.y += this.vector.y;

        if (this.pos.x + this.imgsize > width || this.pos.x < 0) {
            this.vector.x *= -1;
            this.pos.x += this.vector.x;
        }

        if (this.pos.y + this.imgsize > height || this.pos.y < 0) {
            this.vector.y *= -1;
            this.pos.y += this.vector.y;
        }



    }

    display() {
        if (this.bigger)
            image(this.img, this.pos.x, this.pos.y, this.imgsize * 2, this.imgsize * 2);
        else
            image(this.img, this.pos.x, this.pos.y, this.imgsize, this.imgsize);
    }


    getdist(x, y) {
        var d = dist(this.pos.x, this.pos.y, x, y);
        if (d < width / 6) {
            this.bigger = true;
            stroke(this.col);
            strokeWeight(min(width / 10 / d, 5));

            line(x, y, this.pos.x + this.imgsize / 2, this.pos.y + this.imgsize / 2);

        } else {
            this.bigger = false;
        }





    }

    res() {

        this.imgsize = window.innerWidth / 50;
    }






}