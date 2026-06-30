window.onload = function () {
    if (localStorage.getItem("Ben10Save") === null){
        createsave();
    }

    gamedata = loadsave();
    gamedata.chapter = 5;
    savegame()
    console.log(gamedata);
    showscene("menuScene");
};
