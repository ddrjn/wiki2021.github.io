let hps;

window.onload = function() {
    hps = loadJSON("");
    setthingsup();


    var modaltrigers = document.getElementsByClassName("hpmodalpointer");

    var amm = modaltrigers.length;
    for (var i = 0; i < amm; i++) {

        modaltrigers[i].addEventListener("click", ts, false);
        modaltrigers[i].myParam = i;
    }


}



window.onresize = function() {
    setthingsup();


}



function setthingsup() {

    let firstArrowY = document.getElementById("arrowpoint1").clientHeight * 0.8;
    let firstArrowX = window.innerWidth / 12;
    var a1 = document.getElementById("hparrow1");
    a1.style.position = "absolute";
    a1.style.top = `${firstArrowY}px`;
    a1.style.left = `${firstArrowX}px`;

    a1.style.width = `${firstArrowY*0.45}px`;



    let firstArrowY1 = document.getElementById("arrowpoint2").clientHeight * 0.8;
    var a2 = document.getElementById("hparrow2");
    a2.style.position = "absolute";
    a2.style.top = `${firstArrowY1}px`;
    a2.style.right = `${firstArrowX*2}px`;


    a2.style.width = `${firstArrowY1*0.23}px`;



    let firstArrowY3 = document.getElementById("arrowpoint3").clientHeight * 0.9;

    var a3 = document.getElementById("hparrow3");
    a3.style.position = "absolute";
    a3.style.top = `${firstArrowY3}px`;
    a3.style.left = `${firstArrowX*1.1}px`;

    a3.style.width = `${firstArrowY3*0.85}px`;



    let firstArrowY4 = document.getElementById("arrowpoint4").clientHeight * 0.8;
    var a4 = document.getElementById("hparrow4");
    a4.style.position = "absolute";
    a4.style.top = `${firstArrowY4}px`;
    a4.style.right = `${firstArrowX*2}px`;


    a4.style.width = `${firstArrowY4*0.63}px`;




}




function ts(aaa) {
    //console.log(aaa.currentTarget.myParam);
    j = aaa.currentTarget.myParam;

    document.getElementById("exampleModalLongTitle").innerHTML = hps.generalmodalmodel[j].name;
    document.getElementById("memberDesc").innerHTML = hps.generalmodalmodel[j].descrition;
    var mediaSource = hps.generalmodalmodel[j].photo;
    if (mediaSource.substr(mediaSource.length - 4) == '.mp4') {
        document.getElementById("personVideo").setAttribute("src", hps.generalmodalmodel[j].photo);
        document.getElementById("personVideo").load();
        document.getElementById("personVideo").style.display = "block";
        document.getElementById("personImage").style.display = "none";

    } else {
        document.getElementById("personVideo").style.display = "none";
        document.getElementById("personImage").style.display = "block";
        document.getElementById("personImage").src = hps.generalmodalmodel[j].photo;
    }
    var myModal = new bootstrap.Modal(document.getElementById("memberModal"), {});
    myModal.show();
    document.getElementById("closeModal").addEventListener("click", function() { myModal.hide(); });

}