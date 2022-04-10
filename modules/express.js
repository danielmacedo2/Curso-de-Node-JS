const express = require("express");
const UserModel = require("../src/models/user.model");
const userModel = require("../src/models/user.model");

const app = express();

app.use(express.json()); // vai sinalizar que vamos utilizar Json nas nossas requiçõe


app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>Hello World! </h1>");
});

app.get("/users", (req, res) => {
  // Get para pegar uma lista de usúarios
  const users = [
    {
      name: "Joana Doe",
      email: "joanadoe@gmail.com",
    },
    {
      name: "Daniel Macedo",
      email: "danielms@gmail.com",
    },
  ];

  res.status(200).json(users);
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(500).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta`, +port));
