const newgamebtn = document.getElementById("newgamebtn");
const continuebtn = document.getElementById("continuebtn");
const aliensbtn = document.getElementById("aliensbtn");
const settingsbtn = document.getElementById("settingsbtn");
const backbtn = document.getElementById("backbtn");
const mapbackbtn = document.getElementById("mapbackbtn")

newgamebtn.addEventListener("click",Startnewgame);
continuebtn.addEventListener("click",ContinueGame);
aliensbtn.addEventListener("click",Showaliens);
settingsbtn.addEventListener("click",Settings);
backbtn.addEventListener("click",Backtomenu)
mapbackbtn.addEventListener("click",Backtomenu)

function Startnewgame(){
    let choice = confirm(
        "Start a New Game ? \n\nYour Current Progress Will Be Lost!"
    );
    if(choice){
        resetsave();
        loadmap();
        showscene("mapScene");
    }
}

function ContinueGame(){
    gamedata = loadsave();
    loadmap();
    showscene("mapScene");
}

function Showaliens(){
    alert("Adding Your Aliens Feature Soon!");
}

function Settings(){
    showscene("settingsScene");
}

function Backtomenu(){
    showscene("menuScene")
}