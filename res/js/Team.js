let myCanvas;
let butilkaOpen;
let butilka;
let butilkaCompressed;
let scrollval = 0;
let memberInfo;
var imgArray = new Array(); //array storing peoples images
var positions = new Array(); //array for storing circle positions, first mentornum are mentors
var mentorNum = 5; //ammount of mentors
var startAnimating = false; //boolean for addressing when to start animation
var personCircleSize; //size of circle of person dependent on screen size
var mentorCircleSize;
var EmptyCircleSize; //size of empty circle dependent on screen size
var butilkaSizeX, butilkaSizeY; //size of butilka
var butilkaStart;
var k;
var mentors = new Array();
var slaves = new Array(); //Circle objects that hold us pretty much
var emptyCircles = new Array();
var emptyCircleNum = 100; //number of empty circles
let butilkaXbounds, butilkaYbounds; //boundries for circles
let frameXbounds, frameYbounds;
var modalOpen = false;
var vectorGiven = false;
var mentorsExited = new Array();
var emptyExited = new Array();
let canvasSize;

let offset;

function preload() {

    butilka = loadImage('res/img/Team_Bottle.png');
    butilkaCompressed = loadImage('res/img/Bottle_pressed.png');
    butilkaOpen = butilka;
    memberInfo = loadJSON('res/members/members.json', loadImages);
    calculateVars();

}


function setup() {
    butilkaXbounds = createVector(butilkaStart + mentorCircleSize / 2, butilkaSizeX * 0.8);
    butilkaYbounds = createVector(butilkaStart + mentorCircleSize / 2, butilkaSizeY);
    frameXbounds = createVector(personCircleSize, window.innerWidth - personCircleSize);
    frameYbounds = createVector(butilkaSizeY * 1.5, canvasSize * 0.95);
    for (var k = 0; k < mentorNum; k++) {

        mentors[k] = new Circle(mentorCircleSize, color(91, 105, 170, 200), createVector(random(butilkaXbounds.x + personCircleSize / 2, butilkaXbounds.y - personCircleSize / 2), random(butilkaYbounds.x + personCircleSize / 2, butilkaYbounds.y - personCircleSize / 2)), imgArray[k], createVector(random(-0.3, 0.3), 0.3));
        mentors[k].setBounds(butilkaXbounds, butilkaYbounds);
        mentorsExited[k] = false;
    } //creating mentors inside the butilka


    for (var k = mentorNum; k < memberInfo.people.length; k++) {
        var slaveID = k - mentorNum;
        var col = slaveID % 4;
        var row = int(slaveID / 4);
        var cont = (window.innerWidth - personCircleSize * 2) / 4;
        //slaves[slaveID] = new Circle(personCircleSize,color(91, 105, 170, 200),createVector(personCircleSize*2+cont*col+random(-personCircleSize,personCircleSize),butilkaSizeY*2+personCircleSize+row*2*personCircleSize+random(-personCircleSize,personCircleSize)),imgArray[k],createVector(random(-1,1),random(-1,1)));
        slaves[slaveID] = new Circle(personCircleSize, color(91, 105, 170, 200), createVector(random(butilkaXbounds.x, butilkaXbounds.y), random(butilkaYbounds.x, butilkaYbounds.y)), imgArray[k], createVector(random(-1, 1), random(-4, 4)));
        slaves[slaveID].setBounds(butilkaXbounds, butilkaYbounds);
        slaves[slaveID].disableTumble();
        slaves[slaveID].increaseMaxSpeed();
        //slaves[slaveID].setBounds(frameXbounds,frameYbounds);
    }


    for (var k = 0; k < emptyCircleNum; k++) {




        emptyCircles[k] = new Circle(EmptyCircleSize, color(91, 105, 170, random(100, 255)), createVector(random(butilkaXbounds.x, butilkaXbounds.y), random(butilkaYbounds.x, butilkaYbounds.y)), null, createVector(random(-1, 1), random(-4, 4)));
        emptyCircles[k].setBounds(butilkaXbounds, butilkaYbounds);
        emptyCircles[k].disableTumble();
        emptyCircles[k].increaseMaxSpeed2();


    }








    myCanvas = createCanvas(window.innerWidth, canvasSize).id("teamcanvas");
    myCanvas.parent("teamCanvas");
    myCanvas.id("teamcanvas");
    myCanvas.background('rgba(255,255,255, 0)');

    ellipseMode(CENTER);
    noStroke();

    //allocate values to screen size dependent vars

    setTimeout(() => {
        startAnimating = true;
    }, 5000);
}


function mainActivity() {

    clear();
    background('rgba(255,255,255, 0)');
    fill(color(91, 105, 170, 100));

    // ellipse(400, 400, 102, 102);
    // image(imgArray[0], 400, 400, 100, 100)
    //ellipse(100,100,200,200)
    //background('rgba(255,255,255, 0)');



    for (var i = 0; i < emptyCircles.length; i++) {
        emptyCircles[i].moveAbout();
        emptyCircles[i].display();

        if (!emptyCircles[i].getExited() && !emptyExited[i]) {
            emptyCircles[i].setExited(frameYbounds.x);
        }
        if (emptyCircles[i].getExited() && !emptyExited[i]) {
            emptyExited[i] = true;
            emptyCircles[i].setBounds(frameXbounds, frameYbounds);
            emptyCircles[i].enableTumble();
            emptyCircles[i].increaseMaxSpeed();


        }


    }


    for (var i = 0; i < slaves.length; i++) {
        slaves[i].moveAbout();
        slaves[i].display();
        if (!slaves[i].getExited() && !mentorsExited[i]) {
            slaves[i].setExited(frameYbounds.x);
        }
        if (slaves[i].getExited() && !mentorsExited[i]) {
            mentorsExited[i] = true;
            slaves[i].setBounds(frameXbounds, frameYbounds);
            slaves[i].enableTumble();
            setTimeout((m) => {
                slaves[m].resetMaxSpeed();
            }, 2000, i);

        }
    }


    imageMode(CORNER);
    image(butilka, butilkaStart, butilkaStart, butilkaSizeX, butilkaSizeY);




    for (var i = 0; i < mentors.length; i++) {
        mentors[i].moveAbout();
        mentors[i].display();


    }




}

function draw() {

    if (!startAnimating) {
        scrollval = window.scrollY
            // console.log(document.getElementById("teamCanvas").offsetTop);
            //console.log(scrollval);

        if (scrollval > offset) {
            startAnimating = true;
            butilka = butilkaCompressed;
        }

    }


    if (startAnimating) {
        if (!vectorGiven) {
            var timing = 100;
            var minitimig = 100 * slaves.length / emptyCircles.length;
            for (var k = 0; k < slaves.length; k++) {
                setTimeout((m) => {
                    slaves[m].setBounds(frameXbounds, createVector(butilkaStart, frameYbounds.y));
                    slaves[m].setLoc(createVector(butilkaStart + butilkaSizeX, butilkaStart + butilkaSizeY / 2))
                    slaves[m].setVel(createVector(random(window.innerWidth / 4, window.innerWidth / 4 * 3), frameYbounds.y));
                }, k * timing, k);



            }

            for (var k = 0; k < emptyCircles.length; k++) {
                setTimeout((m) => {
                    emptyCircles[m].setBounds(frameXbounds, createVector(butilkaStart, frameYbounds.y));
                    emptyCircles[m].setLoc(createVector(butilkaStart + butilkaSizeX, butilkaStart + butilkaSizeY / 2))
                    emptyCircles[m].setVel(createVector(random(0, window.innerWidth / 4 * 3), frameYbounds.y));
                }, k * minitimig, k);

            }
            setTimeout(() => { butilka = butilkaOpen; }, emptyCircles.length * 1.1 * minitimig);



            vectorGiven = true;
        }




    }
    mainActivity();


}




function mousePressed() {
    if (!modalOpen) {
        var lastInStack = -1;
        for (var i = 0; i < mentors.length; i++) {
            if (mentors[i].checkMouseOver(mouseX, mouseY)) {
                lastInStack = i;

                // document.getElementById("memberModal").show();

            }

        }

        for (var i = 0; i < slaves.length; i++) {
            if (slaves[i].checkMouseOver(mouseX, mouseY)) {
                lastInStack = i + mentors.length;
            }

        }

        if (lastInStack != -1) {
            modalOpen = true;
            document.getElementById("exampleModalLongTitle").innerHTML = memberInfo.people[lastInStack].name;
            document.getElementById("memberDesc").innerHTML = memberInfo.people[lastInStack].descrition;
            document.getElementById("personImage").src = memberInfo.people[lastInStack].photo;
            var myModal = new bootstrap.Modal(document.getElementById("memberModal"), {});
            myModal.show();
            document.getElementById("closeModal").addEventListener("click", function() {
                modalOpen = false;
                myModal.hide();
            });
            $('#memberModal').on('hidden.bs.modal', function(e) {

                modalOpen = false;

            })
        }





    }
}


function loadImages(peopleinfo) {
    for (var k = 0; k < peopleinfo.people.length; k++) {

        //imgArray[k]= loadImage(peopleinfo.people[k].photo);
        //console.log()
        imgArray[k] = loadImage(peopleinfo.people[k].photo);

    }

}

function calculateVars() {
    personCircleSize = window.innerWidth / 15;
    mentorCircleSize = window.innerWidth / 12;
    EmptyCircleSize = window.innerWidth / 25;
    butilkaSizeX = window.innerWidth / 1.25;
    butilkaSizeY = window.innerWidth / 5.4;
    butilkaStart = window.innerWidth * 0.05;
    offset = document.getElementById("teamCanvas").offsetTop * 0.8;
    canvasSize = window.innerHeight * 1.3;

    if (window.innerHeight > window.innerWidth) {
        personCircleSize = window.innerHeight / 17;
        mentorCircleSize = window.innerHeight / 15;
        EmptyCircleSize = window.innerHeight / 25;
        emptyCircleNum = 30;
        offset = document.getElementById("teamCanvas").offsetTop * 0.5;
        canvasSize = window.innerHeight;


    }

}




class Circle {
    exited = false;
    escape = false;
    velocity;
    boundX = null;
    boundY = null;
    maxSpeed = min(window.innerWidth, window.innerHeight) / 900;
    tumble = true;
    constructor(size, color, location, img, velocity) {
        this.size = size;
        this.color = color;
        this.location = location;
        this.img = img;
        this.velocity = velocity;
    }

    setExited(bound) {
        if (this.location.y > bound)
            this.exited = true;

    }
    getExited() {
        return this.exited;
    }
    display() {
        imageMode(CENTER);
        fill(this.color)

        ellipse(this.location.x, this.location.y, this.size, this.size);
        if (this.img != null) {
            image(this.img, this.location.x, this.location.y, this.size - 10, this.size - 10);

        }


    }

    moveAbout() {
        var m = this.maxSpeed / 10;
        var accx = random(-m, m);
        var accy = random(-m, m);
        if (this.tumble) {
            this.velocity.x = this.velocity.x + accx;
            this.velocity.y = this.velocity.y + accy;
        }
        if (this.velocity.x >= this.maxSpeed) this.velocity.x = this.maxSpeed;
        if (this.velocity.x <= 0 - this.maxSpeed) this.velocity.x = -this.maxSpeed;
        if (this.velocity.y >= this.maxSpeed) this.velocity.y = this.maxSpeed;
        if (this.velocity.y <= 0 - this.maxSpeed) this.velocity.y = -this.maxSpeed;
        this.location.x = this.location.x + this.velocity.x;
        this.location.y = this.location.y + this.velocity.y;
        if (this.boundX != null) {
            if (this.location.x <= this.boundX.x || this.location.x >= this.boundX.y) {
                //if(this.escape){
                //console.log("esc");
                //  this.velocity.x = 0-this.maxSpeed/random(1,this.maxSpeed);
                //    this.velocity.y = this.maxSpeed/random(1.2,this.maxSpeed); 
                //    this.escape =false;
                //    this.location.x =this.location.x + this.velocity.x;

                // }
                //  else 
                //  {
                this.location.x = this.location.x - this.velocity.x;
                this.velocity.x = (-this.velocity.x) / abs(this.velocity.x) * this.maxSpeed;


                // }
            }

            if (this.location.y <= this.boundY.x) {


                this.location.y -= this.velocity.y / abs(this.velocity.y) * this.maxSpeed;

                this.velocity.y = (-this.velocity.y);

            } else

            if (this.location.y >= this.boundY.y) {



                this.location.y -= this.velocity.y / abs(this.velocity.y) * this.maxSpeed;

                this.velocity.y = (-this.velocity.y);
            }


        }


    }

    disableTumble() {
        this.tumble = false;


    }
    enableTumble() {
        this.tumble = true;

    }
    setBounds(boundx, boundy) {
        this.boundX = boundx;
        this.boundY = boundy;
    }


    checkMouseOver(x, y) {
        if (dist(x, y, this.location.x, this.location.y) < this.size / 2) {
            return true;

        }
        return false;


    }


    setVel(dir) {
        var norm = dist(dir.x, dir.y, this.location.x, this.location.y);
        var x = (dir.x - this.location.x) / norm;
        var y = (dir.y - this.location.y) / norm;
        var velVector = createVector(x * this.maxSpeed, y * this.maxSpeed);
        this.escape = true;
        this.velocity = velVector;

    }

    increaseMaxSpeed() {
        this.maxSpeed = min(window.innerWidth, window.innerHeight) / 300;

    }

    increaseMaxSpeed2() {
        this.maxSpeed = min(window.innerWidth, window.innerHeight) / 150;

    }




    resetMaxSpeed() {
        this.maxSpeed = min(window.innerWidth, window.innerHeight) / 900;


    }


    setLoc(newloc) {
        this.location = newloc;


    }



}