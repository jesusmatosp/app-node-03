const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody! - demo 22222");
});
 
module.exports.app = app;
