const express = require('express');
const {getAccessToken} = require("./spotify_api/getAccessToken");
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
   res.end(await getAccessToken());
});

app.listen(port);