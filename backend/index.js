const express = require('express');
const {searchTracks} = require("./spotify_api/searchTracks");
const cors = require('cors')

const app = express();
const port = 3000;

const corsOptions = {
    origin: 'localhost:8080',
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(cors());

app.get('/search', async (req, res) => {
    const trackName = req.query.track;

    if (!trackName) {
        return res.json({
            'isError': true,
            'message': 'Track name is required',
        });
    }

    try {
        const tracks = await searchTracks(trackName);
        res.json(tracks);
    } catch (error) {
        res.status(500).json({
            'isError': true,
            'message': error.message,
        });
    }
});

app.listen(port);