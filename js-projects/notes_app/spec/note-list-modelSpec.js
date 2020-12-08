(function() {
    function testNoteList() {
        let noteList = new NoteList(note);
        noteList.addNote('hello world');
        console.log(noteList.list);
        if (noteList.list[0] !== 'hello world') {
            throw new Error("does not store inputted text");
        }
        else (console.log('inputText store text in list property: pass'))
    }

   testNoteList();
})();
