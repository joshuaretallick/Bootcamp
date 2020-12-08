class NoteView {

    constructor(noteList) {
        this.noteList = noteList;
    }

    noteListHTML() {
        let returnString = ""
        this.noteList.notes.forEach((element) => {
            returnString = returnString + (element.text) + " ";
        })
        return "<ul>" + returnString + "</ul>"
    }

}