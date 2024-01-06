const express = require('express');
const meetingsRouter = express.Router();

const { 
    getAllFromDatabase, 
    updateInstanceInDatabase, 
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
    addToDatabase('meetings', createMeeting());
    res.send('Meeting created.');
})

meetingsRouter.delete('/', (req, res, next) => {
    deleteAllFromDatabase('meetings');
    res.status(204).send();
})

module.exports = meetingsRouter;