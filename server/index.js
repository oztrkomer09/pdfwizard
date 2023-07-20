import express from 'express';
import runLinkedInScraper from './scraper.js';
import fs from 'fs';

const app = express();
const port = 3000;

app.use(express.json());



app.post('/scrape', async (req, res) => {
  const { url } = req.body;

  try {
    const data = await runLinkedInScraper(url);

    res.status(200).json({ message: 'Scraping completed successfully', data });
  } catch (error) {
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
