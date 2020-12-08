'use strict'

function testNoteListStartsWithNoNotes() {
    let noteList = new NoteList();
    let assert = new Assert();
    console.log('NoteList starts with no notes in it');
    assert.isTrue(noteList.getNotes().length === 0);
}

testNoteListStartsWithNoNotes();

function testCanAddAndStoreNewNotes() {
    let noteList = new NoteList();
    let assert = new Assert();
    noteList.addNote('hello world');
    console.log('Adds new note to list');
    assert.toEqual(noteList.getNotes()[0].getText(), 'hello world');

}

testCanAddAndStoreNewNotes();

