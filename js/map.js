function loadmap() {
    const chapterlist = document.getElementById("chapterlist");
    chapterlist.innerHTML = "";

    for (let chapter = 1; chapter <= 10; chapter++) {
        const card = document.createElement("div");
        card.classList.add("chapter-card");

        if (chapter < gamedata.chapter) {
            card.innerText = "Chapter " + chapter;
            card.classList.add("completed");
        }

        else if (chapter === gamedata.chapter) {
            card.innerText = "Chapter " + chapter;
            card.classList.add("current");
            card.addEventListener("click", function () {
                alert("Start Chapter " + chapter);
            });
        }

        else {
            card.innerText = "Chapter " + chapter;
            card.classList.add("locked");
        }

        chapterlist.appendChild(card);

        if (chapter<10){
            const line = document.createElement("div");
            line.classList.add("chapter-line");
            if(chapter<gamedata.chapter){
                line.classList.add("completed")
            }
            chapterlist.appendChild(line);
        }
    }
}