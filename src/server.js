const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect("mongo connect", {
  useNewUrlParser: true
});

const app = express();
const server = require("http")(app);
const io = require("socket.io")(server);

io.on("connection", socket => {
  console.log("Nova conecção", socket.id);
});

// Allow all requests
app.use(cors());

app.use(express.json());
app.use(routes);

server.listen(3000, () => {
  console.log("server is running");
});
