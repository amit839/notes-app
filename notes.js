// console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = ()=>{
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }
    catch(e){
        return [];
    }
};

var saveNotes = (notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));      
};

var addNote = (title, body)=>{
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNote = notes.filter((note)=> note.title=== title);
    if(duplicateNote.length===0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = ()=>{
    return fetchNotes();
};

var getNote = (title)=>{
    var notes = fetchNotes();
    var filteredNote = notes.filter((note)=> note.title===title);
    return filteredNote[0];
};

var removeNote = (title)=>{
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note)=> note.title!==title);
    saveNotes(filteredNotes);

    return filteredNotes.length !== notes.length;
};

var logNote = (note)=>{
    console.log("--------------");
    console.log(`Title : ${note.title}`);
    console.log(`Body : ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}