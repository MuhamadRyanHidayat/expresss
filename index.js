const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Halo aku express!');
});
app.get('/login', (req, res) => {
    res.send('Login!');
});
app.get('/register', (req, res) => {
    res.send('Require POST for register!');
});

app.listen(port, () => console.log(`App listen on port ${port}`))