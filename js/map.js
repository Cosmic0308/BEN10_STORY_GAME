function loadmap() {
    const chapterlist = document.getElementById("chapterlist");
    chapterlist.innerHTML = "";

    chapters.forEach(function (chapter) {
        const card = document.createElement("div");
        card.classList.add("chapter-card");

        if (chapter.id < gamedata.chapter) {
            card.innerText = "Chapter " + chapter.id;
            card.classList.add("completed");
        }

        else if (chapter.id === gamedata.chapter) {
            card.innerText = "Chapter " + chapter.id;
            card.classList.add("current");
            card.addEventListener("click", function () {
                startchapter(chapter.id);
            });
        }

        else {
            card.innerText = "Chapter " + chapter.id;
            card.classList.add("locked");
        }

        chapterlist.appendChild(card);

        if (chapter.id < chapter.length) {
            const line = document.createElement("div");
            line.classList.add("chapter-line");
            if (chapter < gamedata.chapter) {
                line.classList.add("completed")
            }
            chapterlist.appendChild(line);
        }
    });
}