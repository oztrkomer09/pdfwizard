import express from 'express';
import runLinkedInScraper from './scraper.js';
import cors from 'cors';
import fs from 'fs';

const app = express();
const port = 8800;

app.use(express.json());

app.use(cors());

app.post('/scrape', async (req, res) => {
  const { url } = req.body;

  try {
    const data = await runLinkedInScraper(url);

    res.status(200).json({ message: 'Scraping completed successfully', data });
  } catch (error) {
    console.error('Scraping error:', error);
    let errorMessage = 'An error occurred while scraping LinkedIn profile';

    if (error.message) {
      errorMessage = error.message;
    }

    res.status(500).json({ error: errorMessage });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
