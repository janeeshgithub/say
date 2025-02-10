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

app.get("/", (req, res) => {
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
        <title>Hustle Quotes</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg">
        <style>
          body {
            background-color: #000;
            color: #fff;
            font-family: "Arial", sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            position: relative;
          }
          
          .container {
            background: #111;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
            text-align: center;
            max-width: 600px;
            width: 80%;
            animation: fadeIn 1s ease-in-out;
          }

          h1 {
            font-size: 2rem;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 2px;
          }

          blockquote {
            font-size: 1.4rem;
            font-style: italic;
            margin: 20px 0;
            padding: 20px;
            border-left: 4px solid #fff;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.2);
          }

          /* Refresh Button */
          .refresh-btn {
            position: absolute;
            top: 20px;
            right: 20px;
            background: transparent;
            border: 2px solid white;
            color: white;
            padding: 10px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 18px;
            transition: 0.3s;
          }

          .refresh-btn:hover {
            background: white;
            color: black;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
        </style>
      </head>
      <body>
        <button class="refresh-btn" onclick="location.reload()">🦋</button>
        <div class="container">
          <h1>Axiom</h1>
          <blockquote>${quote}</blockquote>
        </div>
      </body>
    </html>
  `);

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
