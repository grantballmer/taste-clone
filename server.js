const express = require('express');

const app = express();

app.listen(8081, process.env.IP, () => {
    console.log("Server is listening");
});