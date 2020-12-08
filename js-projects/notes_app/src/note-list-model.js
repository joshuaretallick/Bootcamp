class NoteList {

    constructor() {
        this.list = [];
    }

    addNote(text) {
        note = new Note(text);
        this.list.push(note);
    }

}