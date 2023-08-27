const express = require("express");
const app = express();
const port = 3000;

var cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");

const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://1144764:Re17AjPv640Uyg@cluster0.tkarxff.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyParser.json());

app.get("/", (req, res) => {
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("localparks");
      const users = database.collection("users");
      const result = await users.find({}).toArray();
      console.log(result);
      res.send(result);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });