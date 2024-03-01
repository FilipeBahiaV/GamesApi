const sqliteConnection = require("../../sqlite");
const createGames = require('../../sqlite/migrations/createGames')

async function migrationsRun(){
    const schemas = [
        createGames
    ].join('');

    sqliteConnection().then(db =>{
        db.exec(schemas)
    }).catch(error => console.log(error));
}

module.exports = migrationsRun