const knex = require('./knex');

async function readList(){
    const result = await knex.conntection('list').select('*');
    return result;
}

async function readBarcodes(){
    const result = await knex.conntection('barcodes').select('*');
    console.log(result);
    return result;
}

module.exports ={
    readList,
    readBarcodes,
}