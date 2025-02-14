let express = require("express");

const { checkToken } = require("./CheckToken");
require("dotenv").config();

let app = express();
app.use(express.json());

console.log(process.env.MYToken);

app.get("/", checkToken, (req, res) => {
  console.log(req.query);
  res.send({ auth: req.query.token });
});

app.listen("8000");
