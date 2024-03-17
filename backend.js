const express = require("express");
const app = express();
app.listen(3000);
app.use(express.static("public"))
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.use((req, res) => {
  res.send("<h1>404 Not-Found</h1>");
});
