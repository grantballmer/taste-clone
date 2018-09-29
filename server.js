const express = require("express");
const app = express();

app.use(express.static(__dirname + "/client/public"));

app.get("/api", (req, res) => {
  const customer = {
    id: 1,
    firstName: "john",
    lastName: "Henry"
  };
});

app.listen(8000, process.env.IP, () => {
  console.log("Server is listening");
});
