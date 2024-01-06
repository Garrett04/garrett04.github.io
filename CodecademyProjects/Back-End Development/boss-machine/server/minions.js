const express = require('express');
const minionsRouter = express.Router();
const { 
    getAllFromDatabase,
    addToDatabase, 
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId
} = require('./db');

let minions;

const getMinionsFromDatabase = (req, res, next) => {
    minions = getAllFromDatabase('minions');
    next();
}


minionsRouter.param('minionId', (req, res, next, id) => {
    const minionId = id;
    const found = getFromDatabaseById('minions', minionId);
    // console.log(found)

    if (!found) {
        return res.status(404).send('Minion does not exist.');
    }

    req.minionId = minionId;
    req.minion = found;
    next();
    // console.log(minionId);
})

minionsRouter.get('/', getMinionsFromDatabase, (req, res, next) => {
    res.send(minions);
})

minionsRouter.post('/', (req, res, next) => {
    // console.log(req.body);
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
})

minionsRouter.get('/:minionId', (req, res, next) => {
    res.send(req.minion);
})

minionsRouter.put('/:minionId', (req, res, next) => {
    const { name, title, salary, weaknesses } = req.body;
    const oldMinion = req.minion;
    const newMinion = { 
        id: req.minionId,
        name: name || oldMinion.name,
        title: title || oldMinion.title,
        salary: Number(salary) || oldMinion.salary,
        weaknesses: weaknesses || oldMinion.weaknesses,
    };

    // console.log(newMinion, req.minionId, oldMinion.salary);

    const minionToUpdate = updateInstanceInDatabase('minions', newMinion);
    // console.log(minionToUpdate);

    res.send(minionToUpdate);
})

minionsRouter.delete('/:minionId', (req, res, next) => {
    deleteFromDatabasebyId('minions', req.minionId);
    res.status(204).send();
})

// work route
minionsRouter.get('/:minionId/work', (req, res, next) => {
    const allWork = getAllFromDatabase('work');
    const work = allWork.filter(work => req.minionId === work.minionId);
    res.send(work);
})

minionsRouter.post('/:minionId/work', (req, res, next) => {
    const newWork = addToDatabase('work', req.body);
    res.status(201).send(newWork);
})

minionsRouter.put('/:minionId/work/:workId', (req, res, next) => {
    const workId = req.params.workId;
    const { title, description, hours } = req.body;
    if (workId !== req.minionId) {
        return res.status(400).send();
    }

    const newWork = {
        id: workId,
        title,
        description,
        hours,
        minionId: req.minionId,
    }
    
    updateInstanceInDatabase('work', newWork);

    res.send(newWork);
})

minionsRouter.delete('/:minionId/work/:workId', (req, res, next) => {
    deleteFromDatabasebyId('work', req.params.workId);
    res.status(204).send();
})

module.exports = minionsRouter;