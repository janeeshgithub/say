const express = require("express");
const cors = require("cors");
const quotes = require("./quotes");

const app = express();
app.use(cors()); // Enable CORS for all origins

let shuffledQuotes = [...quotes]; // Copy of quotes array
let currentIndex = 0;

// Fisher-Yates shuffle function
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

// Shuffle quotes initially
shuffleArray(shuffledQuotes);

app.get("/quote", (req, res) => {
  const quote = shuffledQuotes[currentIndex];

  // Move to next quote, reset if at the end
  currentIndex = (currentIndex + 1) % shuffledQuotes.length;

  // Reshuffle when cycle completes
  if (currentIndex === 0) shuffleArray(shuffledQuotes);

  res.json({ quote });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
