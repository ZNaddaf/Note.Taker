//----------------------------------------------------
// NPM Repositories
//----------------------------------------------------

const fs = require("fs");
const util = require("util");

//----------------------------------------------------
// Asynchronous Vars
//----------------------------------------------------
const readFileA = util.promisify(fs.readFile);
const writeFileA = util.promisify(fs.writeFile);


//----------------------------------------------------
// Classes
//----------------------------------------------------
class Store {
    constructor() {
        this.lastId = 0;
        this.read().then((notes) => {
            for (let i = 0; i < notes.length; i++) {
                const defaultNote = notes[i]
                this.lastId = Math.max(this.lastId, defaultNote.id)
            }
        })
    }

    read() {
        return readFileA('./db/db.json').then((fileContent) => {
            return JSON.parse(fileContent)
        })
    }

    write(notes) {
        return writeFileA('./db/db.json', JSON.stringify(notes))
    }

    getNotes() {
        return this.read()
    }

    addNote(note) {
        return this.read().then((notes) => {
            note.id = ++this.lastId
            notes.push(note)
            this.write(notes)
            return note
        })

    }

    delNote(id) {
        return this.read().then((notes) => {
            for (let i = 0; i < notes.length; i++) {
                const defaultNote = notes[i]
                if (id == defaultNote.id) {
                    notes.splice(i, 1)
                    break;
                }
            }
            this.write(notes)
        })
    }
}

//----------------------------------------------------
// Exports
//----------------------------------------------------
module.exports = new Store();