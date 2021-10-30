const knex = require('./knex');

async function readList() {
    const result = await knex.conntection('list').select('*');
    return result;
}

async function readBarcodes(code) {
    const result = await knex.conntection('barcodes').select('*').where('code', code);
    if (result.length === 0 && code !== '0' || code === 0) {
        const results = await knex.conntection('barcodes').insert({ code });
        return ({ data: "update", result: results });
    }
    return result;
}

module.exports = {
    readList,
    readBarcodes,
}