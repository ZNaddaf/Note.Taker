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
    }

    read() {
        return readFileA('./db/db.json').then((fileContent) => {
            return JSON.parse(fileContent)
        })
    }

    write(note) {
        writeFileA
        fs.writeFile(db.json);
        return (JSON.parse)
    }

    getNotes() {
        return this.read()
    }

    addNotes(note) {

    }

    delNotes(id) {

    }
}

//----------------------------------------------------
// Exports
//----------------------------------------------------
module.exports = new Store();