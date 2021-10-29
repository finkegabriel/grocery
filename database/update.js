const knex = require('./knex');

async function updateName(data) {
    const { name } = data;
    const result = await knex.conntection('list').select('*');
    return result;
}

module.exports = {
    updateName,
}