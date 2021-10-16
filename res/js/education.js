var workshops;

function ts(aaa) {
    //console.log(aaa.currentTarget.myParam);
    j = aaa.currentTarget.myParam - 1;

    document.getElementById("exampleModalLongTitle").innerHTML = workshops.workshops[j].name + " - " + workshops.workshops[j].date;
    document.getElementById("memberDesc").innerHTML = workshops.workshops[j].descrition;
    var mediaSource = workshops.workshops[j].photo;
    if (mediaSource.substr(mediaSource.length - 4) == '.mp4') {
        document.getElementById("personVideo").setAttribute("src", workshops.workshops[j].photo);
        document.getElementById("personVideo").load();
        document.getElementById("personImage").style.display = "none";
        document.getElementById("personVideo").style.display = "block";

    } else {
        document.getElementById("personVideo").style.display = "none";
        document.getElementById("personImage").style.display = "block";
        document.getElementById("personImage").src = workshops.workshops[j].photo;
    }
    var myModal = new bootstrap.Modal(document.getElementById("memberModal"), {});
    myModal.show();
    document.getElementById("closeModal").addEventListener("click", function() { myModal.hide(); });

}

function setPoints(attach) {

    var esc = document.getElementById("es_circle");
    var esb = document.getElementById("es_back").getBoundingClientRect().top + document.documentElement.scrollTop;
    esc.style.position = "absolute";
    esc.style.top = `${esb-esc.clientHeight/12}px`;
    esc.style.left = "33.33%";
    esc.style.width = "33.33%";


    if (attach) {
        document.getElementById("pe_rm").addEventListener("click", showMore);

    }
    var modaltrigers = document.getElementsByClassName("modal-pointer");
    for (var mt = 0; mt < 10; mt++) {
        if (attach) {
            modaltrigers[mt].addEventListener("click", ts, false);
            modaltrigers[mt].myParam = mt + 1;
        }
    }
    for (var i = 1; i < 11; i++) {
        var a = document.getElementById("circle" + i).getBoundingClientRect().top + document.documentElement.scrollTop;
        var b = document.getElementById("workshop" + i);
        var h = b.offsetHeight;

        b.style.position = "absolute";
        b.style.top = `${a-h/4}px`;
        //b.style.left = `55%`;
        b.style.textAlign = "center";
        if (attach) {
            var circ = document.getElementById("circle" + i);
            var wkshp = document.getElementById("workshop" + i);
            circ.addEventListener("click", ts, false);
            circ.myParam = i + 9;
            wkshp.addEventListener("click", ts, false);
            wkshp.myParam = i + 9;


            var peventstop = document.getElementById("p-events").getBoundingClientRect().top + document.documentElement.scrollTop;
            var pevents = document.getElementById("p-events");
            pevents.style.position = "relative";
            pevents.style.top = `4.5vw`;
            pevents.style.left = `-5%`;
            // document.getElementById("circle"+i).addEventListener("click", function(j){

            //     document.getElementById("exampleModalLongTitle").innerHTML = workshops.workshops[j].name;
            //     document.getElementById("memberDesc").innerHTML = workshops.workshops[j].descrition;
            //     var myModal = new bootstrap.Modal(document.getElementById("memberModal"), {});
            //     myModal.show();
            //     document.getElementById("closeModal").addEventListener("click", function(){  myModal.hide(); });
            // }.bind(i),false);


        }

    }




}
window.addEventListener("load", yourFunction, false);


function showMore() {
    setTimeout(myonresize, 10);
    var x = document.getElementById("hiddenText");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }


}

function yourFunction() {


    setPoints(true);

    workshops = loadJSON('res/info/workshops.json', changestuff);
}






function setup() {


}


function myonresize() {
    setTimeout(setPoints, 20, false);


}

window.onresize = function() {
    myonresize();
}


function changestuff(stuff) {


    for (var i = 1; i < 11; i++) {

        var b = document.getElementById("workshop" + i);
        var children = b.children;
        console.log(children.length);
        children[0].innerHTML = stuff.workshops[i + 8].name;
        children[1].innerHTML = stuff.workshops[i + 8].date;

    }


}
// Я ЭТО ПЕРЕПИШУ, ПОТОМУ ЧТО БЛЯТЬ У МЕНЯ ГЛАЗА СЛЕЗЯТЬСЯ ОТ ТАКОГО