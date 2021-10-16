let collabs;

function changeNames(myjson) {
    var colabnames = document.getElementsByClassName("colab_title_dynamic");
    var amm = colabnames.length;
    for (var i = 0; i < amm; i++) {
        colabnames[i].innerHTML = myjson.generalmodalmodel[i].name;


    }
}



function preload() {
    collabs = loadJSON("res/info/collabs.json", changeNames)

    var modaltrigers = document.getElementsByClassName("modal-pointer");

    var amm = modaltrigers.length;
    for (var i = 0; i < amm; i++) {

        modaltrigers[i].addEventListener("click", ts, false);
        modaltrigers[i].myParam = i;
    }

}


function ts(aaa) {
    //console.log(aaa.currentTarget.myParam);
    j = aaa.currentTarget.myParam;

    document.getElementById("exampleModalLongTitle").innerHTML = collabs.generalmodalmodel[j].name;
    document.getElementById("memberDesc").innerHTML = collabs.generalmodalmodel[j].descrition;
    var mediaSource = collabs.generalmodalmodel[j].photo;
    if (mediaSource.substr(mediaSource.length - 4) == '.mp4') {
        document.getElementById("personVideo").setAttribute("src", collabs.generalmodalmodel[j].photo);
        document.getElementById("personVideo").load();
        document.getElementById("personVideo").style.display = "block";
        document.getElementById("personImage").style.display = "none";

    } else {
        document.getElementById("personVideo").style.display = "none";
        document.getElementById("personImage").style.display = "block";
        document.getElementById("personImage").src = collabs.generalmodalmodel[j].photo;
    }
    var myModal = new bootstrap.Modal(document.getElementById("memberModal"), {});
    myModal.show();
    document.getElementById("closeModal").addEventListener("click", function() { myModal.hide(); });

}



function setup() {



}