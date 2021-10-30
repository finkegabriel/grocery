const knex = require('./knex');

async function readList() {
    const result = await knex.conntection('list').select('*');
    return result;
}

async function readBarcodes(code) {
    const result = await knex.conntection('barcodes').select('*').where('code', code);
    if (result.length === 0) {
        return ({data:"update"})
    }
    return result;
}

module.exports = {
    readList,
    readBarcodes,
}