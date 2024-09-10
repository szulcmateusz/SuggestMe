const express = require('express');
const {searchTracks} = require("./spotify_api/searchTracks");
const app = express();
const port = 3000;

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