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

    }

    write(note) {

    }

    getNotes() {

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