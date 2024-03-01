const createGames =`
CREATE TABLE IF NOT EXISTS games(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    type VARCHAR,
    played BOOLEAN
)`;

module.exports = createGames