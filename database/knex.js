const knex = require('knex');

const conntection = knex({
    client: 'sqlite3',
    connection: {
        filename: 'grocery.sqlite3'
    },
    useNullAsDefault: true
});

module.exports = {
    conntection,
}