window.onload = function () {
    if (localStorage.getItem("Ben10Save") === null){
        createsave();
    }

    gamedata = loadsave();
    gamedata.exp = 250;
    savegame()
    console.log(gamedata);
    showscene("menuScene");
};
