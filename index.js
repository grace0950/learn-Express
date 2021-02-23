var express = require("express");
var app = express(); //產生 Express Application 物件

/*
  req: 獲取url訊息 request
  res: 瀏覽器返回響應訊息 response
*/

app.get("/", function (req, res) { //當使用者連線到伺服器根目錄("/")時，做出回應
  res.send("<b>Welcome to Express!</b>");
});

//靜態路由範例
app.get("/test", function (req, res) { //當使用者連線到 /test 時，做出回應
  res.send("This is test path!");
});

//動態路由範例
app.get("/animal/:animal", (req, res) => {
  res.send(`This is an ${req.params.animal}.`);
});

app.listen(3000, function () {
  console.log("伺服器已經啟動在 http://localhost:3000/");
});
