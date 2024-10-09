const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./tempData/tempData");

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("api is running");
});

app.get("/api/chat", (req, res) => {
  //   console.log(chats);
  res.send(chats);
});
app.get("/api/chat/:id", (req, res) => {
  const inputId = req.params.id;
  const outputData = chats.find((ele) => ele._id === inputId);
  res.send(outputData);
});
app.listen(PORT, console.log(`server running on port ${PORT}`));
