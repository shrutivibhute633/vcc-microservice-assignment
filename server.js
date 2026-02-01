const express = require('express');
const app = express();

const SERVICE_PORT = 3000;
const SERVICE_HOST = '0.0.0.0';

app.get('/', (req, res) => {
    res.status(200).send('Microservice running on Puppy Linux VM');
});

app.get('/health', (req, res) => {
    res.json({
        status: 'UP',
        service: 'Puppy Linux Microservice'
    });
});

app.listen(SERVICE_PORT, SERVICE_HOST, () => {
    console.log(`Microservice started on ${SERVICE_HOST}:${SERVICE_PORT}`);
});
