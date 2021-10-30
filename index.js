var express = require("express");
var app = express();
var { readBarcodes, readList } = require('./database/read');
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

app.post("/grocery",jsonParser, async (req, res, next) => {
    // const { name, code } = req.body;
    // console.log("name ", name,code);
    console.log(req.body);
});

app.listen(3010, () => {
    console.log("Server running on port 3010");
});