const express = require("express");
const app = express();
app.listen(3004 ,(req,res)=>{
  console.log("app listining on port http://localhost:3004")
});
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});
app.use((req, res) => {
  res.send("<h1>404 Not-Found</h1>");
});
