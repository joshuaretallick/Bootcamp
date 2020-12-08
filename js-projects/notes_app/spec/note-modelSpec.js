(function() {
    function testInputText() {
        let note = new Note('hello world');

        if (note.inputText() !== 'hello world') {
            throw new Error("does not return inputted text");
        }
        else (console.log('inputText returns text: pass'))
    }

    testInputText();
})();

