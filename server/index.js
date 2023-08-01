import express from 'express';
import runLinkedInScraper from './scraper.js';
import cors from 'cors';

const app = express();
const port = 8800;

app.use(express.json());
app.use(cors());

const MAX_RETRIES = 3; // Maximum number of retry attempts

const scrapeWithRetry = async (url) => {
  for (let retries = 0; retries < MAX_RETRIES; retries++) {
    try {
      const data = await runLinkedInScraper(url);
      return data;
    } catch (error) {
      console.error('Scraping error:', error);
      console.log(`Retrying...`);
    }
  }
  throw new Error('Failed to scrape LinkedIn profile after multiple attempts.');
};

app.post('/scrape', async (req, res) => {
  const { url } = req.body;

  try {
    const data = await scrapeWithRetry(url);
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
