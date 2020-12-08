'use strict'

function testNoteListViewStartsEmpty() {
    let assert = new Assert();
    let noteList = new NoteList();
    let noteView = new NoteView(noteList);
    console.log('NoteView starts with no notes in it');
    assert.toEqual(noteView.noteListHTML(), '<ul></ul>');
}

testNoteListViewStartsEmpty();


function testNoteListViewWithNotesAdded() {
    let assert = new Assert();
    let noteList = new NoteList();
    noteList.addNote('Hello World')
    noteList.addNote('What Up?')
    noteList.addNote('Not much, you?')
    let noteView = new NoteView(noteList);
    console.log('NoteList can have notes added to it');
    assert.toEqual(noteView.noteListHTML(), '<ul><li><div>Hello World</div></li><li><div>What Up?</div></li><li><div>Not much, you?</div></li></ul>');
}

testNoteListViewWithNotesAdded();
