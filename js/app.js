window.onload = function () {
    if (localStorage.getItem("Ben10Save") === null){
        createsave();
    }

    gamedata = loadsave();
    console.log(chapters)
    showscene("menuScene");
};
