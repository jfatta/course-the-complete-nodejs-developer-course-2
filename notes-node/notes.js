console.log('Starting node.js');

const fs = require('fs');
const notesFile = 'notes-data.json';

var fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync(notesFile));
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync(notesFile, JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();

    var duplicateNotes = notes.filter((note) => note.title === title);
    
    if (duplicateNotes.length === 0){
        var note = {
            title,
            body
        };

        notes.push(note);
        saveNotes(notes);
        return note;
    }
}

var getAll = () => {
    console.log('Getting all notes');
}

var getNote = (title) => {
    console.log('Getting the note', title);
}

var removeNote = (title) => {
    console.log('Removing the note', title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};