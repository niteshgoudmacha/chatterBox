const express = require("express");
const path = require('path');
const cookieParser = require('cookie-parser');
const http = require('http');
const socketio = require('socket.io');

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const server = http.createServer(app);
const io = socketio(server);

const cors = require("cors");
const authRoute = require("./routes/authRoute");
const keys = require("./config/keys");

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST"],
  optionsSuccessStatus: 200
};

io.on('connection', (socket) => {
  console.log('new connection');

  socket.on('new-message', (message) => {
    console.log(message);
    io.emit(message);
  });
})

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (!err) console.log("Connected to DB");
    else console.log(err);
  }
);

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/api/user", authRoute);

app.use(express.static(__dirname+'/dist/chatterBox'));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'chatterBox', 'index.html')));


const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log(`Chat app listening on port ${PORT}!`));
