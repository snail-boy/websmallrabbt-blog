const express = require('express');
const favicon = require('express-favicon');

const app = express();

app.use(favicon(__dirname + '/public/favicon.png'));

// Add your routes here, etc.

const server = app.listen(3000, function(){
    console.log('server is running at %s .', server.address().port);
});
