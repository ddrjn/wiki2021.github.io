let myCanvas;
let escapeStarted = false;
let escapeRoomPicture;

let level = 0;
let level0picture;
let level1picture;
let level2picture;
let level3picture;
let level3picturelight;
let level3pictureoff;
let level3pictureuv, lightbutton, uvbutton;
let containerdims;
let onlevel = false;
let levelfour = false;
let light = 1,
    uv = 0;
let l3pic;
let congratsimage;
var mainLevelCoordinates = [

    [0, 0.08, 0.25, 0.35], //crockodile
    [0.68, 0.60, 0.838, 0.846], //tooth
    [0.777, 0.40, 1, 0.50], //shelf
    [0.016, 0.698, 0.231, 0.879], //table
    [0.330, 0.401, 0.533, 0.762] //door


];
let leveltwo = false;

var corrects = ['s', 'a', 'l', 's', 'a', 0];


var descriptions = [
    "place",
    "Good job! Looks like we found the sick tooth, however from first sight it looks just fine. We definitely need to search further in order to make a therapy plan. Sometimes problems can be microscopic and invisible to the human eye. Sometimes cavities might be on the sides or between the teeth.",
    "Well done! Looks like you can read hidden messages well. It will help you with upcoming tasks. For now, we know that the tooth has a cavity, but how are we supposed to prevent it from passing on to other teeth? For the beginning let us find out some more about the teeth themselves. Oh wait, looks like the object that is supposed to help you with that is giving you a riddle to solve: “I’m not a dentist, but I can tell you about cavities. Find me first, before you lose your sanity!“ You are lucky today! The hint itself also sent its arbitrary coordinates from the world it lives in: 196:3:1:2",
    "Good that you are still reading books for research! Do you think you got your hint correctly from the previous task? Don’t worry, you will quickly check. Just as the cavity, sometimes the most obvious stay hidden in light but become visible in the dark. Does this ring any bell? Turn me around and have fun with the periodic table!",
    "Glad to see you’ve come this far. Seems that only thing left for you is to find a way out and finish the word."
]


var titles = [
    "TASK1",
    "TASK2",
    "TASK3",
    "TASK4",
    "TASK5",
    "FINAL"


]

function escape_preload() {
    escapeRoomPicture = loadImage("res/img/education/escape_room/escape_room.jpg");
    //escapeRoomPicture = loadImage("https://2021.igem.org/wiki/images/a/ab/T--Estonia_TUIT--mathtask.jpg");
    level0picture = loadImage("res/img/education/escape_room/mathtask.PNG");
    level1picture = loadImage("res/img/education/escape_room/aaaaaaaaaaaa.PNG");
    level2picture = loadImage("res/img/education/escape_room/openbook.png");
    level3picture = loadImage("res/img/education/escape_room/PERIODICALLLIGHTS.PNG");
    level3picturelight = loadImage("res/img/education/escape_room/version-periodic-table-elements.jpg");
    level3pictureoff = loadImage("res/img/education/escape_room/PERIODICNOLIGHT.PNG");
    level3pictureuv = loadImage("res/img/education/escape_room/periodic_uv.jpg");
    uvbutton = loadImage("res/img/education/escape_room/uv.png");
    lightbutton = loadImage("res/img/education/escape_room/light.png");
    congratsimage = loadImage("res/img/education/escape_room/aaaaaaaaaaaa.PNG");
}



function setup() {




}

function draw() {

    if (level == 1) {
        image(escapeRoomPicture, 0, 0, containerdims, containerdims);
        var a = escapeRoomPicture.get(mouseX - myCanvas.width / 60 - myCanvas.width / 16, mouseY - myCanvas.width / 60 - myCanvas.width / 16, myCanvas.width / 30, myCanvas.width / 30);
        image(a, mouseX - myCanvas.width / 8, mouseY - myCanvas.width / 8, myCanvas.width / 8, myCanvas.width / 8);



    }


    if (level == 5) {
        image(congratsimage, 0, 0, containerdims, containerdims);
        document.getElementById("levelDescription").innerHTML = "Great Job! <br> You have succesfully passed escaped!!";
        document.getElementById("levelIndicator").innerHTML = "Congradulations";
        document.getElementById("numberInput").style.display = "none";
        document.getElementById("numberButton").style.display = "none";
        noLoop();


    }


    if (level == 3 && levelfour) {
        image(l3pic, 0, 0, containerdims, containerdims);
        image(lightbutton, containerdims * 0.7, 0, containerdims * 0.1, containerdims * 0.1);
        image(uvbutton, containerdims * 0.8, 0, containerdims * 0.1, containerdims * 0.1);
        //image(a, mouseX - myCanvas.width / 8, mouseY - myCanvas.width / 8, myCanvas.width / 8, myCanvas.width / 8);
        if (mouseX > 0.7 * myCanvas.width && mouseY > 0 && mouseX < 0.9 * myCanvas.width && mouseY < 0.1 * myCanvas.width) {
            document.getElementById("dradadadada").style.cursor = "grab";


        } else {
            document.getElementById("dradadadada").style.cursor = "initial";

        }










    }



}


$('.img_mouseover').css({ 'position': 'relative' })


function mouseMoved() {



    let moveX = ((window.innerWidth / 2 - mouseX) / 15)
    let moveY = ((window.innerHeight / 2 - mouseY) / 15)
    $('.img_mouseover').css({ 'left': `${moveX}px`, 'top': `${moveY}px` })

    if (escapeStarted) {


        if (!onlevel) {
            value = mainLevelCoordinates[level];
            if (mouseX > value[0] * myCanvas.width && mouseY > value[1] * myCanvas.width && mouseX < value[2] * myCanvas.width && mouseY < value[3] * myCanvas.width) {
                document.getElementById("dradadadada").style.cursor = "grab";


            } else {
                document.getElementById("dradadadada").style.cursor = "initial";

            }

        }
    }

}

function mousePressed() {
    if (escapeStarted) {


        if (!onlevel) {
            value = mainLevelCoordinates[level];
            if (mouseX > value[0] * myCanvas.width && mouseY > value[1] * myCanvas.width && mouseX < value[2] * myCanvas.width && mouseY < value[3] * myCanvas.width) {

                startlevel(level);

            }
        }

    }



    if (level == 3 && levelfour) {
        if (mouseX > 0.7 * myCanvas.width && mouseY > 0 && mouseX < 0.8 * myCanvas.width && mouseY < 0.1 * myCanvas.width) {
            if (light == 1 && uv == 1) l3pic = level3pictureuv;
            if (light == 1 && uv == 0) l3pic = level3pictureoff;
            if (light == 0 && uv == 1) l3pic = level3picture;
            if (light == 0 && uv == 0) l3pic = level3picturelight;
            light = 1 - light;
            console.log("lightclicked");


        }

        if (mouseX > 0.8 * myCanvas.width && mouseY > 0 && mouseX < 0.9 * myCanvas.width && mouseY < 0.1 * myCanvas.width) {
            if (light == 1 && uv == 1) l3pic = level3picturelight;
            if (light == 1 && uv == 0) l3pic = level3picture;
            if (light == 0 && uv == 1) l3pic = level3pictureoff;
            if (light == 0 && uv == 0) l3pic = level3pictureuv;
            uv = 1 - uv;

        }

    }




}




function startEscapeRoom() {
    if (!escapeStarted) {

        //document.getElementById("escape_room_div").style.display = "flex";
        $('#escape_room_div').fadeIn(800).animate({ display: "flex", height: "100%" });
        //document.getElementById("escape_room_div").style.di

        var container = document.getElementById("escapeCanvascontainer");
        containerdims = container.clientWidth * 0.82;
        escapeRoomPicture.resize(containerdims, containerdims);
        myCanvas = createCanvas(containerdims, containerdims);

        myCanvas.parent("escapeCanvascontainer");
        myCanvas.id("dradadadada");
        document.getElementById("dradadadada").style.position = "relative";
        document.getElementById("dradadadada").style.left = `${containerdims * 0.1}px`;


        escapeStarted = true;
        image(escapeRoomPicture, 0, 0, containerdims, containerdims);




    }


}



function startlevel(lvl) {
    // image(level0picture, 0, 0, containerdims, containerdims);
    onlevel = true;
    if (lvl == 0) level1();
    if (lvl == 1) level2();
    if (lvl == 2) level3();
    if (lvl == 3) level4();
    if (lvl == 4) level5();




}


function level1() {
    image(level0picture, 0, 0, containerdims, containerdims);
    document.getElementById("numberButton").disabled = false;
    document.getElementById("numberInput").disabled = false;


}


function level2() {
    image(level1picture, 0, 0, containerdims, containerdims);
    document.getElementById("numberButton").disabled = false;
    document.getElementById("numberInput").disabled = false;
    leveltwo = true;

}

function level3() {
    image(level2picture, 0, 0, containerdims, containerdims);
    document.getElementById("numberButton").disabled = false;
    document.getElementById("numberInput").disabled = false;


}


function level4() {
    image(level3picture, 0, 0, containerdims, containerdims);
    document.getElementById("numberButton").disabled = false;
    document.getElementById("numberInput").disabled = false;
    levelfour = true;
    l3pic = level3picturelight;

}

function level5() {

    document.getElementById("numberButton").disabled = false;
    document.getElementById("numberInput").disabled = false;



}





function submitter() {
    var val = document.getElementById("numberInput").value;
    if (val == corrects[level] && val != '') {
        //nextlevel();
        document.getElementById("escape_room_sect").style.animation = 'correct_escape 1s 1';
        setTimeout(function() { document.getElementById("escape_room_sect").style.animation = 'green_to_white 1s 1'; }, 1000);
        document.getElementsByClassName("salsaletters")[level].style.display = "flex";
        level++;
        image(escapeRoomPicture, 0, 0, containerdims, containerdims);
        document.getElementById("numberButton").disabled = true;
        document.getElementById("numberInput").disabled = true;
        onlevel = false;
        document.getElementById("numberInput").value = "";
        document.getElementById("levelDescription").innerHTML = descriptions[level];
        document.getElementById("levelIndicator").innerHTML = titles[level];
        levelfour = false;

    } else {

        document.getElementById("escape_room_sect").style.animation = 'wrong_escape 1s 1';
        setTimeout(function() { document.getElementById("escape_room_sect").style.animation = 'red_to_white 1s 1'; }, 1000);

        // $("#levelDescription").css({
        // backgroundColor: "red",
        // animation: 'wrong_escape 2s linear forward'

        //  });






    }





}