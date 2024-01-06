const express = require('express');
const meetingsRouter = express.Router();

const { 
    getAllFromDatabase,
    createMeeting, 
    addToDatabase,
    deleteAllFromDatabase
} = require('./db');

let meetings;

const getMeetingsFromDatabase = (req, res, next) => {
    meetings = getAllFromDatabase('meetings');
    next();
}

meetingsRouter.get('/', getMeetingsFromDatabase, (req, res, next) => {
    res.send(meetings);
})

meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = addToDatabase('meetings', createMeeting());
    res.status(201).send(newMeeting);
})

meetingsRouter.delete('/', (req, res, next) => {
    deleteAllFromDatabase('meetings');
    res.status(204).send();
})

module.exports = meetingsRouter;