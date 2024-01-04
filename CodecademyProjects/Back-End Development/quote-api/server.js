const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})

app.get('/api/quotes/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    res.json({ quote: randomQuote  });
})

app.get('/api/quotes', (req, res, next) => {
    const { person } = req.query; // Destructure person from the query object.
    const jsonResponse = { quotes: [] }; // Final response to be sent.

    if (person) { // If the query string has a person attribute.
        const personData = quotes.filter((data) => data.person === person);
        jsonResponse.quotes = personData;
        return res.send(jsonResponse);
    }

    jsonResponse.quotes = quotes.map((data) => data);

    res.send(jsonResponse);
})

app.post('/api/quotes', (req, res, next) => {
    const { quote } = req.query;
    const { person } = req.query;

    if (!quote || !person) {
        return res.status(400).send('Either quote text or person does not exist.');
    }

    const newData = { 
        quote: {
            quote, 
            person,
        }
    }
    
    quotes.push({ quote:  quote, person  });

    res.json(newData);
})