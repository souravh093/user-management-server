const express = require("express");
const cors = require("cors");
const app = express();

// middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const users = [
  { id: 1, name: "Manna", email: "mannainfo@gmail.com" },
  { id: 2, name: "Joshim", email: "joshim@gmail.com" },
  { id: 3, name: "Sabnur", email: "sabnurfo@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Users management server running");
});

app.get("/users", (req, res) => {
  res.send(JSON.stringify(users));
});

app.post("/users", (req, res) => {
  console.log("post api hitting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser)
});

app.listen(port, () => {
  console.log(`Server is running port: ${port}`);
});
