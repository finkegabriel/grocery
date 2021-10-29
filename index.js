var express = require("express");
var app = express();
var { readBarcodes, readList } = require('./database/read');

app.get("/grocery", async(req, res, next) => {
    const rest = await readBarcodes();
    console.log("rest ",rest);
    res.status(200).json(rest);
});

app.post("/grocery", (req, res, next) => {
    res.json(req.body);
});

app.listen(3010, () => {
    console.log("Server running on port 3010");
});