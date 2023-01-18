const notes = require('express').Router();
const {readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');


notes.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

notes.post('/', (req, res) => {
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;
  
    // If all the required properties are present
    if (title && text ) {
      // Variable for the object we will save
      const newnote = {
        title,
        text,
       id: uuid(),
      };
  
      readAndAppend(newnote, './db/db.json');
  
      const response = {
        status: 'success',
        body: newnote,
      };
  
      res.json(response);
    } else {
      res.json('Error in posting notes');
    }
  });
  
  module.exports = notes;
  