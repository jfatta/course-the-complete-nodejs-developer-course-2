console.log('Starting node.js');

const fs = require('fs');
const notesFile = 'notes-data.json';

var addNote = (title, body) => {
    var notes = [];
    try {
        notes = JSON.parse(fs.readFileSync(notesFile));
    } catch (e) {
    }

    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0){
        notes.push({
            title,
            body
        });
    
        fs.writeFileSync(notesFile, JSON.stringify(notes));
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