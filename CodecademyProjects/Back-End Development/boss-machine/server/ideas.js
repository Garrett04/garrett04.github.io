const express = require('express');
const ideasRouter = express.Router();

const { 
    getAllFromDatabase, 
    getFromDatabaseById, 
    addToDatabase, 
    updateInstanceInDatabase,
    deleteFromDatabasebyId
} = require('./db');

let ideas = {};

const getIdeasFromDatabase = (req, res, next) => {
    ideas = getAllFromDatabase('ideas');
    next();
}

ideasRouter.param('ideaId', (req, res, next, id) => {
    const ideaId = id;
    // console.log(ideaId);
    const found = getFromDatabaseById('ideas', ideaId);

    if (!found) {
        return res.status(404).send('Idea not found.');
    }

    req.ideaId = ideaId;
    req.idea = found;
    next();
})

ideasRouter.get('/', getIdeasFromDatabase, (req, res, next) => {
    res.send(ideas);
})

ideasRouter.post('/', (req, res, next) => {
    const { name, description, numWeeks, weeklyRevenue } = req.query;
    
    if (!name || !description || !numWeeks || !weeklyRevenue) {
       return res.status(404).send('name/description/numWeeks/weeklyRevenue does not exist');
    }

    addToDatabase('ideas', req.query);
    res.status(201).send(req.query);
})

ideasRouter.get('/:ideaId', (req, res, next) => {
    res.send(req.idea);
})

ideasRouter.put('/:ideaId', (req, res, next) => {
    const oldIdea = req.idea;
    const { name, description, numWeeks, weeklyRevenue } = req.query;

    const newIdea = {
        id: req.ideaId,
        name: name || oldIdea.name,
        description: description || oldIdea.description,
        numWeeks: numWeeks || oldIdea.numWeeks,
        weeklyRevenue: weeklyRevenue || oldIdea.weeklyRevenue,
    }
    
    updateInstanceInDatabase('ideas', newIdea);
    res.send(newIdea);
})

ideasRouter.delete('/:ideaId', (req, res, next) => {
    deleteFromDatabasebyId('ideas', req.ideaId);
    res.status(204).send();
})

module.exports = ideasRouter;