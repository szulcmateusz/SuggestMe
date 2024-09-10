const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
   res.end('Response');
});

app.listen(port);