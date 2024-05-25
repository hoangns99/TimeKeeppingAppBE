var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3000;

// các route

//GET
app.get('', (req, res) => {
    res.send('Hello Nodejs app')
})

require('./app/routes/employee')(app);
require('./app/routes/timekeeping')(app);

// mở cổng server
app.listen(port, async () => {
    console.log(`Server is running in port ${port}`);
})