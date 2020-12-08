class NoteList {

    constructor() {
        this.notes = [];
    }

    getNotes() {
        return this.notes;
    }

    addNote(text) {
        let note = new Note(text);
        this.notes.push(note);
    }

}