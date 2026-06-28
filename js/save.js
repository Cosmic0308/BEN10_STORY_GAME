const defaultsave ={
    playername : "player",
    chapter : 1,
    exp : 0,
    sumocoins : 0,
    unlockedaliens : [
        "Heatblast"
    ]
};

function createsave(){
    localStorage.setItem(
        "Ben10Save",
        JSON.stringify({...defaultsave})
    );
}

function loadsave(){
    let savedata = localStorage.getItem("Ben10Save");
    return JSON.parse(savedata);
}

function savegame(){
    localStorage.setItem(
        "Ben10Save",
        JSON.stringify(gamedata)
        );
}

function resetsave(){
    localStorage.removeItem("Ben10Save");
    createsave();
    gamedata = loadsave();
}