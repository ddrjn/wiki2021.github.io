var workshops;

function ts(aaa) {
    //console.log(aaa.currentTarget.myParam);
    j = aaa.currentTarget.myParam - 1;

    document.getElementById("exampleModalLongTitle").innerHTML = workshops.workshops[j].name + " - " + workshops.workshops[j].date;
    document.getElementById("memberDesc").innerHTML = workshops.workshops[j].descrition;
    document.getElementById("personImage").src = workshops.workshops[j].photo;
    var myModal = new bootstrap.Modal(document.getElementById("memberModal"), {});
    myModal.show();
    document.getElementById("closeModal").addEventListener("click", function() { myModal.hide(); });

}

function setPoints(attach) {

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
            circ.myParam = i;
            wkshp.addEventListener("click", ts, false);
            wkshp.myParam = i;


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

function preload() {
    console.log("a");
    workshops = loadJSON('res/info/workshops.json', changestuff);
    setPoints(true);
}

function setup() {


}



window.onresize = function() {
    setPoints(false);

}


function changestuff(stuff) {


    for (var i = 1; i < 11; i++) {

        var b = document.getElementById("workshop" + i);
        var children = b.children;
        console.log(children.length);
        children[0].innerHTML = stuff.workshops[i - 1].name;
        children[1].innerHTML = stuff.workshops[i - 1].date;

    }


}
// Я ЭТО ПЕРЕПИШУ, ПОТОМУ ЧТО БЛЯТЬ У МЕНЯ ГЛАЗА СЛЕЗЯТЬСЯ ОТ ТАКОГО