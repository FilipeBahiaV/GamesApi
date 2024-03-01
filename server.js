const express = require('express');
const routes = require('./Routes/');
const migrations = require('./Database/sqlite/migrations')
const app = express();
const port = 3000;


app.use(express.json())

migrations();

app.use('/', routes)

app.listen(port, () => {
    console.log(`Server ApiGames in port:${port}`)
})