const {getAccessToken} = require("./getAccessToken");
const axios = require('axios');

async function searchTracks(track) {
    const searchUrl = `https://api.spotify.com/v1/search`;
    const params = {
        q: track,
        type: 'track',
        limit: 50,
    };

    const headers = {
        'Authorization': `Bearer ${await getAccessToken()}`
    };

    try {
        const response = await axios.get(searchUrl, { headers, params });
        return response.data.tracks.items;
    } catch (error) {
        console.error('Error searching track:', error.response.data);
        throw error;
    }
}

module.exports = {
    searchTracks,
};