const express = require("express");
const cors = require("cors");
const quotes = require("./quotes");

const app = express();
app.use(cors()); // Enable CORS for all origins

let lastQuoteIndex = -1;

app.get("/quote", (req, res) => {
  let randomIndex;

  // Ensure a new quote is selected
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastQuoteIndex);

  lastQuoteIndex = randomIndex;

  res.json({ quote: quotes[randomIndex] });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
