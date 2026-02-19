import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Endpoint to create a tournament
app.post('/tournaments', (req, res) => {
    const tournamentData = req.body;
    // Logic to create a tournament goes here
    res.status(201).send({ message: 'Tournament created!', tournament: tournamentData });
});

// Endpoint to get all tournaments
app.get('/tournaments', (req, res) => {
    // Logic to retrieve tournaments goes here
    res.status(200).send({ message: 'List of tournaments' });
});

// Endpoint to get a specific tournament
app.get('/tournaments/:id', (req, res) => {
    const tournamentId = req.params.id;
    // Logic to retrieve a specific tournament goes here
    res.status(200).send({ message: `Details of tournament ${tournamentId}` });
});

// Endpoint to update a tournament
app.put('/tournaments/:id', (req, res) => {
    const tournamentId = req.params.id;
    const updates = req.body;
    // Logic to update a tournament goes here
    res.status(200).send({ message: `Tournament ${tournamentId} updated!`, updates });
});

// Endpoint to delete a tournament
app.delete('/tournaments/:id', (req, res) => {
    const tournamentId = req.params.id;
    // Logic to delete a tournament goes here
    res.status(200).send({ message: `Tournament ${tournamentId} deleted!` });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});