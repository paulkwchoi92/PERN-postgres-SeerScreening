const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000
const db = require("./queries")
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
// im not sure how postgres will function when connected to express/node
// seeing under it seems cors wouldn't be needed but i put it here just in case 
// it requires an addition field after a single http link base
// const cors = require("cors");
// app.use(cors());


app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});
app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});