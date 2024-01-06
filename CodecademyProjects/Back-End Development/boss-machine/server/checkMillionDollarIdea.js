const checkMillionDollarIdea = (req, res, next) => {
    const { numWeeks, weeklyRevenue } = req.body;
    const total = Number(numWeeks) * Number(weeklyRevenue); 

    if (!numWeeks || !weeklyRevenue || isNaN(total) || total < 1000000) {
        return res.status(400).send();
    }

    next();
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;