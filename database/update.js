const knex = require('./knex').conntection;

async function updateName(data) {
    const { name, code } = data;
    console.log(name, code, " data");
    if (name) {
        const result = await knex('barcodes').insert({ name: name, code: code });
        const final = await knex('list').insert({ name: name, code: code });
        console.log("updating barcodes ", result);
        return final;
    }
    const res = await knex('list').insert({ name: name, code: code });
    console.log("added to list ", res);
    return res;
}

async function addToList(data) {
    const { code } = data;
    console.log(code, " data");
    if (code !== undefined) {
        const final = await knex.select('*').from('barcodes').where('code', code);
        console.log(final);
        if (final[0] != undefined) {
            try {
                const result = await knex('list').select('*').where('code', code);
                // console.log(result, " result");
                if (result.length <= 0) {
                    // console.log(final[0].name);
                    const res = await knex('list').insert({ name: final[0].name, code: final[0].code });
                    return res;
                } else {
                    return "already in list";
                }
            } catch (e) {
                console.log(e);
            }
        }
    }
}

module.exports = {
    updateName,
    addToList,
}