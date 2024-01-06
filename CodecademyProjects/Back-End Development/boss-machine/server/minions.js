const express = require('express');
const minionsRouter = express.Router({ mergeParams: true });
const { 
    getAllFromDatabase,
    addToDatabase, 
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId
} = require('./db');

const allMinions = getAllFromDatabase('minions');

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

minionsRouter.get('/', (req, res, next) => {
    res.send(allMinions);
})

minionsRouter.post('/', (req, res, next) => {
    const newMinion = req.query;
    const minionToFind = allMinions.find(minion => newMinion.name === minion.name);
    // console.log(newMinion);
    // console.log(minionToFind);

    if (minionToFind) {
        // console.log(minionToFind);
        return res.status(404).send('Minion already exists.');
    }
    addToDatabase('minions', newMinion);
    res.send(newMinion);
})

minionsRouter.get('/:minionId', (req, res, next) => {
    res.send(req.minion);
})

minionsRouter.put('/:minionId', (req, res, next) => {
    const { name, title, salary, weaknesses } = req.query;
    const oldMinion = req.minion;
    const newMinion = { 
        id: req.minionId,
        name: name ? name : oldMinion.name,
        title: title ? title : oldMinion.title,
        salary: isNaN(salary) ? oldMinion.salary : salary,
        weaknesses: weaknesses ? weaknesses : oldMinion.weaknesses,
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

module.exports = minionsRouter;