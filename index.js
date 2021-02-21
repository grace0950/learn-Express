var express = require("express");
var app = express(); //產生 Express Application 物件

app.get("/", function (req, res) { //當使用者連線到伺服器根目錄("/")時，做出回應
  res.send("<b>Welcome to Express!</b>");
});

app.get("/test", function (req, res) { //當使用者連線到 /test 時，做出回應
  res.send("This is test path!");
});

app.listen(3000, function () {
  console.log("伺服器已經啟動在 http://localhost:3000/");
});
