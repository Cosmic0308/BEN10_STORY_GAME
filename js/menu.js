const newgamebtn = document.getElementById("newgamebtn");
const continuebtn = document.getElementById("continuebtn");
const aliensbtn = document.getElementById("aliensbtn");
const settingsbtn = document.getElementById("settingsbtn");
const backbtn = document.getElementById("backbtn");

newgamebtn.addEventListener("click",Startnewgame);
continuebtn.addEventListener("click",ContinueGame);
aliensbtn.addEventListener("click",Showaliens);
settingsbtn.addEventListener("click",Settings);
backbtn.addEventListener("click",Backtomenu)

function Startnewgame(){
    showscene("mapScene");
}

function ContinueGame(){
    alert("Adding Continue Game Feature Soon!");
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