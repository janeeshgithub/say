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

  // Detect if request is from a terminal (curl/wget)
  const userAgent = req.headers["user-agent"] || "";
  const isCurl = /curl|wget/i.test(userAgent);

  if (isCurl) {
    // Plain text for curl
    res.setHeader("Content-Type", "text/plain");
    return res.send(quote);
  }

  // HTML response for browsers
  res.send(`
    <html>
      <head>
        <title>Random Quote</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg">
        <style>
          body {
            background-color: black;
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
          }
          blockquote {
            font-size: 1.5rem;
            font-style: italic;
            margin: 20px auto;
            width: 60%;
            border-left: 4px solid #0f0;
            padding-left: 15px;
          }
        </style>
      </head>
      <body>
        <h1>Random Quote</h1>
        <blockquote>${quote}</blockquote>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
