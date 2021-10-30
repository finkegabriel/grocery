const knex = require('./knex').conntection;

async function updateName(data) {
    const { name, code } = data;
    console.log(name, code, " data");
    const checkIfExists = await knex.select('*').from('barcodes').where('code', code);
    console.log(checkIfExists, " checkIfExists");
    try {
        if (name == undefined || name == "" || code !== 0) {
            try {
                const result = await knex('barcodes').insert({ name: name, code: code });
                console.log("updating barcodes ", result);
                return result;
            } catch (e) {
                console.log(e);
            }
        }
        if (name) {
            if (checkIfExists[0].code !== undefined || checkIfExists[0].code !== 0) {
                try {
                    const results = await knex('barcodes').update({ name: name }).where('code', code);
                    return results;
                } catch (e) {
                    console.log(e);
                }
            }
        }
    } catch (e) {
        console.log(e);
    }
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