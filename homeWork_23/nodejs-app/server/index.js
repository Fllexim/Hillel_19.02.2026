require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const TodoModel = require("./mongo/todo.model");

const connect = mongoose.connect(process.env.MONGO_URI);

connect
  .then(() => console.log("DB connected!"))
  .catch((e) => console.log("Error while connecting", e));
  
app.listen(8080, () => {
  console.log("Server in running on localhost:8080...");
});

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello");
});
app.get("/todos", (req, res) => {
  TodoModel.find().then((data) => res.send(data));
});

app.post("/todos", (req, res) => {
  const todo = new TodoModel(req.body);

  todo.save().then((data) => res.send(data));
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Invalid id format",
    });
  }

  TodoModel.deleteOne({ _id: id }).then((data) => {
    if (!data.deletedCount) {
      res.status(404).send({ message: "Todo were not found!" });
    } else {
      res.send(data);
    }
  });
});

app.put("/todos/:id", (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Invalid id format",
    });
  }

  TodoModel.updateOne({ _id: id }, req.body).then((data) => res.send(data));
});
