const express = require("express")
const axios = require("axios")
const app = express();


console.log(axios);


app.listen(5000, () => {
    console.log("server is listening on 5000");
})