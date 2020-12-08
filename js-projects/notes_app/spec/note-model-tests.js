'use strict'

function testNoteHasText() {
    let assert = new Assert();
    let note = new Note('hello world');
    console.log('Instantiates with Text')
    assert.toEqual(note.getText(),'hello world');

}

testNoteHasText();

