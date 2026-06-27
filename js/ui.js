function showscene(sceneid){
    let scenes = document.querySelectorAll(".scene");

    scenes.forEach(function(scene){
        scene.style.display = "none";
    });

    document.getElementById(sceneid).style.display = "flex";
}