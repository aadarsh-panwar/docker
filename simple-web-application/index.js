const express = require('express');

const app = express();
const port =9898;
app.get("/", (req, res) => {
    res.send("Docker example");
});


app.listen(port, ()=> {
    console.log("Listening on port:", port);
});