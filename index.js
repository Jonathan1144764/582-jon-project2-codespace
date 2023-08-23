const express = require("express");
const app = express();
const port = 3000;

var cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");

const { MongoClient } = require("mongodb");

const uri = "mongo database connection string";

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });