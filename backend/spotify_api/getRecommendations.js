const {getAccessToken} = require("./getAccessToken");
const axios = require('axios');

async function getRecommendations(trackId) {
    const searchUrl = `https://api.spotify.com/v1/recommendations`;
    const params = {
        seed_tracks: trackId,
        limit: 100,
    };

    const headers = {
        'Authorization': `Bearer ${await getAccessToken()}`
    };

    try {
        const response = await axios.get(searchUrl, { headers, params });
        return response.data.tracks;
    } catch (error) {
        console.error('Error fetching recommendations:', error.response.data);
        throw error;
    }
}

module.exports = {
  getRecommendations,
};