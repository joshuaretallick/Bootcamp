class NoteView {

    constructor(noteList) {
        this.noteList = noteList;
    }

    noteListHTML() {
        let returnString = ""
        this.noteList.notes.forEach((element) => {
            returnString = returnString + "<li><div>" + (element.text) + "</div></li>";
        })
        return "<ul>" + returnString + "</ul>"
    }

}