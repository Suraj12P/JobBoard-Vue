const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());

const PORT = 5000;

app.get('/api/jobs', async (req, res) => {
    const { query } = req.query;

    if (!query) {
        console.log('query parameter requerid');
        return res.status(400).json({ error: 'Query parameter is required.' });
        
    }

    try {
        const serpApiUrl = `https://serpapi.com/search.json?engine=google_jobs&q=${query}&api_key=${process.env.SERP_API_KEY}`;
        const response = await axios.get(serpApiUrl);

        // Log only necessary information
        console.log(`Fetched ${response.data.jobs_results.length} jobs for query: ${query}`);

        res.json(response.data.jobs_results || []);
      
    } catch (error) {
        console.error('Error fetching jobs:', error.message);
        res.status(500).json({ error: 'Error fetching jobs.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
