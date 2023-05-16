const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "mypages")));
app.get("/", (req, res) => {
  // res.send("hello");
  res.status(200).sendFile(index.html);
});
app.listen(800, () => {
  console.log("here i am");
});
//thats how we do with express js...see here we never use if and elseif.
// ..its intellegent enough
