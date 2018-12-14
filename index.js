var express = require('express');
var app = express();

const PORT = process.env.PORT || 8000;

app.use(express.static(__dirname + '/build'));

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
