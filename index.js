const express = require('express');
const path = require('path')
const bodyparse = require('body-parser');
const ejs = require('ejs');
const middleware = require('./middleware');

var app = express();

app.set('views',path.join(__dirname,'views')); //Set View Files

app.set('view engine','ejs'); //Set view engine
app.use(middleware);
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({ extended : true }));
app.use(require('./AppRouters')); // To handle all routers

const port = process.env.PORT || 8000;
  
app.listen(port, () => {
    console.log('Server is up on port ' + port);
});