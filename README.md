# Note.Taker# Unit 11 Express Homework: Note Taker

## Link
[Hosted by Heroku](https://rocky-waters-44071.herokuapp.com/)

## Description

An application that can be used to write, save, and delete notes. This application uses an express backend to save and retrieve note data from a JSON file.

## User Story

`
AS A user, I want to be able to write and save notes
I WANT to be able to delete notes I've written before
SO THAT I can organize my thoughts and keep track of tasks I need to complete
`

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.


## Screenshots

![Main Page](/public/assets/screenshots/MainSS.png)
(https://github.com/N0matic/Note.Taker/blob/master/public/assets/screenshots/MainSS.png)

![Notes Page](/public/assets/screenshots/MainSS.png)
(https://github.com/N0matic/Note.Taker/blob/master/public/assets/screenshots/NotesSS.png/)

#### Pseudocode

"Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file."


√ frontend already done
                
√ Backend:

√    Html Routes:
        * GET '/notes'
            return: 'notes.html'
        * GET '/'
            return: 'index.html'

√    db.json
        store and retrieve notes
            'fs' module

√    API Routes

√ Application should allow users to view previously saved notes.
        * GET '/api/notes'
            - read 'db.json' 
                return all saved notes as JSON
        
√ Application should allow users to create and save notes.
        * POST '/api/notes'
            - recieve a new note to save on the request body
            - add it to 'db.json'
            - return new note to client
√ Application should allow users to delete previously saved notes.
        * DELETE '/api/notes/:id'
            - recieve a query paramter containing the id of a note to delete.
                > each note has a unique 'id' when saved
            
 √           - to delete a note:
                1. read all notes from 'db.sjon'
                2. remove note with given 'id'
                3. Rewrite notes to 'db.json'