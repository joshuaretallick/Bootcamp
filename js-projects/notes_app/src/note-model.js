(function(exports) {
  class Note {

      constructor(text) {
          this.text = text;
      }

      inputText() {
          return this.text
      }

  }

    exports.Note = Note;
})(this);