var questioncounter = 0;
let questionset;
let correct;
let answerlength;
var correctval = 0;
var waiting = false;

var canvasshown = false;



function nextQuestion() {
    questioncounter += 1;
    if (questioncounter < answerlength) {
        setValues();
    } else {
        document.getElementById("quizsection").style.display = "none";

        document.getElementById("congratssection").style.display = "flex";
        document.getElementById("congratstext").innerHTML = "CONGRATS, YOU HAVE FINISHED THE QUIZ WITH SCORE " + correctval + "/" + answerlength;

        canvas.style.position = "absolute";
        var hh = document.getElementById("firecontainer").getBoundingClientRect().top + document.documentElement.scrollTop;
        canvas.style.top = `${hh}px`
        canvas.style.width = "100%";
        canvas.style.height = `${document.getElementById("firecontainer").offsetHeight}px`;
        document.getElementById("quizquestion").style.display = "none";
        window.requestAnimationFrame(explode);
        canvasshown = true;

    }
    waiting = false;


}

function start() {
    document.getElementById("quizsection").style.display = "flex";


}


function answer(params) {
    if (!waiting) {
        var a = params + 1;
        var btnid = "ans" + a;
        if (params == correct) {
            correctval += 1;
            document.getElementById(btnid).classList.add("btn-correct");
            waiting = true;
            setTimeout(nextQuestion, 1000);

        } else {


            document.getElementById(btnid).classList.add("btn-wrong");
            waiting = true;
            setTimeout(nextQuestion, 1000);
        }
    }


}





function preload() {
    questionset = loadJSON("res/info/quiz_questions.json", letsgo);
    // questionset = loadJSON("res/info/quiz.json", letsgo);


}


function setup() {



}

function letsgo(a) {

    setValues();
    answerlength = a.questions.length;
    console.log(answerlength);
    canvas.style.width = "0px";

}

function setValues() {
    document.getElementById("ans1").classList.remove("btn-wrong");
    document.getElementById("ans2").classList.remove("btn-wrong");
    document.getElementById("ans3").classList.remove("btn-wrong");
    document.getElementById("ans4").classList.remove("btn-wrong");
    document.getElementById("ans1").classList.remove("btn-correct");
    document.getElementById("ans2").classList.remove("btn-correct");
    document.getElementById("ans3").classList.remove("btn-correct");
    document.getElementById("ans4").classList.remove("btn-correct");

    document.getElementById("quizquestion").innerHTML = questionset.questions[questioncounter].question;
    document.getElementById("anst1").innerHTML = questionset.questions[questioncounter].answer1;
    document.getElementById("anst2").innerHTML = questionset.questions[questioncounter].answer2;
    document.getElementById("anst3").innerHTML = questionset.questions[questioncounter].answer3;
    document.getElementById("anst4").innerHTML = questionset.questions[questioncounter].answer4;
    correct = questionset.questions[questioncounter].correct;


}








const max_fireworks = 5,
    max_sparks = 50;
let canvas = document.getElementById('lighterscanvas');
let context = canvas.getContext('2d');



let fireworks = [];

for (let i = 0; i < max_fireworks; i++) {
    let firework = {
        sparks: []
    };
    for (let n = 0; n < max_sparks; n++) {
        let spark = {
            vx: Math.random() * 5 + .5,
            vy: Math.random() * 5 + .5,
            weight: Math.random() * .3 + .03,
            red: Math.floor(Math.random() * 2),
            green: Math.floor(Math.random() * 2),
            blue: Math.floor(Math.random() * 2)
        };
        if (Math.random() > .5) spark.vx = -spark.vx;
        if (Math.random() > .5) spark.vy = -spark.vy;
        firework.sparks.push(spark);
    }
    fireworks.push(firework);
    resetFirework(firework);
}


function resetFirework(firework) {
    firework.x = Math.floor(Math.random() * canvas.width);
    firework.y = canvas.height;
    firework.age = 0;
    firework.phase = 'fly';
}

function explode() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach((firework, index) => {
        if (firework.phase == 'explode') {
            firework.sparks.forEach((spark) => {
                for (let i = 8; i < 14; i++) {
                    let trailAge = firework.age + i;
                    let x = firework.x + spark.vx * trailAge;
                    let y = firework.y + spark.vy * trailAge + spark.weight * trailAge * spark.weight * trailAge;
                    let fade = i * 20 - firework.age * 2;
                    let r = Math.floor(spark.red * fade);
                    let g = Math.floor(spark.green * fade);
                    let b = Math.floor(spark.blue * fade);
                    context.beginPath();
                    context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',1)';
                    context.rect(x, y, 4, 4);
                    context.fill();
                }
            });
            firework.age++;
            if (firework.age > 100 && Math.random() < .05) {
                resetFirework(firework);
            }
        } else {
            firework.y = firework.y - 10;
            for (let spark = 0; spark < 15; spark++) {
                context.beginPath();
                context.fillStyle = 'rgba(' + index * 50 + ',' + spark * 17 + ',0,1)';
                context.rect(firework.x + Math.random() * spark - spark / 2, firework.y + spark * 4, 4, 4);
                context.fill();
            }
            if (Math.random() < .001 || firework.y < 200) firework.phase = 'explode';
        }
    });
    window.requestAnimationFrame(explode);
}





window.addEventListener("resize", resizeCanvas, false);
window.addEventListener("DOMContentLoaded", onLoad, false);





function onLoad() {
    start();








}

function resizeCanvas() {
    if (canvasshown) {
        var hh = document.getElementById("firecontainer").getBoundingClientRect().top + document.documentElement.scrollTop;
        canvas.style.top = `${hh}px`
        canvas.style.width = "100%";
        canvas.style.height = `${document.getElementById("firecontainer").offsetHeight}px`;
    }

}