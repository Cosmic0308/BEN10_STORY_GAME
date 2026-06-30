function startchapter(chapterid){
    currentchapter = chapters.find(function(chapter){
        return chapter.id === chapterid;
    });

    console.log(currentchapter);
    showscene("storyScene");
}