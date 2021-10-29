var express = require("express");
var app = express();
var { readBarcodes, readList } = require('./database/read');

app.get("/grocery", async (req, res, next) => {
    const { code } = req.params;
    const rest = await readBarcodes();
    console.log("rest ", rest);
    return res.status(200).json(rest);
});

app.post("/grocery", (req, res, next) => {
    const { name, code } = req.body;
    // if (rest == "update") {
    //     res.send("update");
    // }
    console.log("name ", name);
    console.log("code ", code);
});

app.listen(3010, () => {
    console.log("Server running on port 3010");
});