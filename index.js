var express = require("express");
var app = express();
var { readBarcodes } = require('./database/read');
var { updateName, addToList } = require('./database/update');
var cors = require('cors');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cors({
    origin: '*'
}));

app.get("/grocery", async (req, res, next) => {
    const { code } = req.query;
    const rest = await readBarcodes(code);
    return res.status(200).json(rest);
});

app.post("/grocery", jsonParser, async (req, res, next) => {
    const { name, data } = req.body;
    const rest = await updateName({ name: name, code: data });
    return res.status(200).json(rest);
});

app.post("/grocery/list", jsonParser, async (req, res, next) => {
    const { data } = req.body;
    const rest = await addToList({ code: data });
    return res.status(200).json(rest);
});

app.listen(3011, () => {
    console.log("Server running on port 3011");
});