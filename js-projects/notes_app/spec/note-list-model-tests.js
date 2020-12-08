function testCanAddAndStoreNewNotes() {
    let noteList = new NoteList();
    let assert = new Assert();
    noteList.addNote('hello world');
    console.log('Adds new note to list');
    assert.toEqual(noteList.getNotes()[0].getText(), 'hello world');

}

testCanAddAndStoreNewNotes();

