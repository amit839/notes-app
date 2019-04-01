// console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}
const bodyOptions = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
}
const argv = yargs
    .command('add','Add a new note',{
        title:titleOptions,
        body:bodyOptions
    })
    .command('list','List all notes')
    .command('read','Read a note',{
        title:titleOptions
    })
    .command('remove','Remove a note',{
        title:titleOptions
    })
    .argv;
var command = argv._[0];

// console.log("Command : " + command);
// console.log("yargs:",argv);

if(command == 'add'){
    var note = notes.addNote(argv.title,argv.body);
    if(note){
        console.log("Notes created");
        notes.logNote(note);
    }
    else{
        console.log("Note title already in use");
    }
}
else if(command == 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach(element => notes.logNote(element));
}
else if(command == 'read'){
    var myNote = notes.getNote(argv.title);
    if(myNote){
        console.log("Note found");
        notes.logNote(myNote);
    }
    else{
        console.log("Note not found");
    }
}
else if(command == 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    console.log( noteRemoved ? "Note was removed" : "Note not found");
    
}
else {
    console.log("Command not recognized");
}