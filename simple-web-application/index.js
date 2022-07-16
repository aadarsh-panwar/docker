const express = require('express');

const app = express();
const port =9898;
app.get("/", (req, res) => {
    res.send("Docker examples");
});


app.listen(port, ()=> {
    console.log("Listening on port:", port);
});