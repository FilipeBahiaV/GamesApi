const sqliteConnection = require('../Database/sqlite')

class gamesController{
    async create(req, res){
        const game = req.body;
        const database = await sqliteConnection();

        const query = 'INSERT INTO games (name, type, played) VALUES (?, ? ,?)';
        const params = [game.name, game.type, game.played]
        database.run(query, params)

        return res.json();

    }

    async update(req, res){
        const gameID = req.params.id;

        const database = await sqliteConnection();

        database.run(`UPDATE games
        SET name = (?), type = (?), played = (?) WHERE id = (?)`,
        [req.body.name, req.body.type, req.body.played, gameID])
        return res.json();
    }

    async delete(req, res){
        const gameID = req.params.id;

        const database = await sqliteConnection();

        database.run(`DELETE FROM games
         WHERE id = (?)`,
        [gameID])
        return res.json();
    }

    async show(req, res){
        const {id} = req.params;

        const database = await sqliteConnection();

        const row = database.get(`SELECT * FROM games WHERE id = (?)`, [id])
        console.log(id)
        return res.json(row);
    }

    async index(req, res){}
}

module.exports = gamesController