import express from 'express';
import runLinkedInScraper from './scraper.js';
import fs from 'fs';
import cors from 'cors';

const app = express();
const port = 3000;



app.use(express.json());

app.use(cors())

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
//   res.setHeader('Access-Control-Allow-Methods', 'Content-Type', 'Authorization');
//   next();
// })

app.post('/scrape', async (req, res) => {
  const { url } = req.body;
  console.log(req.body);

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
