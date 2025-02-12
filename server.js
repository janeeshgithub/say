const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");
const quotes = require("./quotes");
const jokes = require("./jokes");
const unisonRoute = require("./unison"); // Import jokes from jokes.js

const figlet = require("figlet");
const enforce = require("express-force-https");

const app = express(); // ✅ Initialize app first
app.use(enforce); // ✅ Now use enforce middleware

app.use(cors()); // Enable CORS for all origins

let shuffledQuotes = [...quotes];
let currentIndex = 0;

// Fisher-Yates shuffle function
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
shuffleArray(shuffledQuotes); // Shuffle initially

// ANSI Color Codes
const colors = [
  "\x1b[31m", // Red
  "\x1b[32m", // Green
  "\x1b[33m", // Yellow
  "\x1b[34m", // Blue
  "\x1b[35m", // Magenta
  "\x1b[36m", // Cyan
  "\x1b[91m", // Bright Red
  "\x1b[92m", // Bright Green
  "\x1b[93m", // Bright Yellow
  "\x1b[94m", // Bright Blue
  "\x1b[95m", // Bright Magenta
  "\x1b[96m", // Bright Cyan,
];

// Function to add random color to text
const colorize = (text) => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return `${randomColor}${text}\x1b[0m`; // Reset color at the end
};

// Middleware: Force HTTPS Manually in Development
app.use((req, res, next) => {
  if (
    process.env.NODE_ENV === "production" &&
    req.headers["x-forwarded-proto"] !== "https"
  ) {
    return res.redirect("https://" + req.headers.host + req.url);
  }
  next();
});

// 🎭 Joke Endpoint - Returns a random joke
app.get("/joke", (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

  // Detect terminal request
  const userAgent = req.headers["user-agent"] || "";
  const isCurl = /curl|wget/i.test(userAgent);

  if (isCurl) {
    res.setHeader("Content-Type", "text/plain");
    return res.send(colorize(randomJoke)); // Send colored joke
  }

  res.json({ joke: randomJoke });
});

// 📜 Quote Endpoint - Returns a shuffled quote
app.get("/", (req, res) => {
  const quote = shuffledQuotes[currentIndex];
  currentIndex = (currentIndex + 1) % shuffledQuotes.length;

  if (currentIndex === 0) shuffleArray(shuffledQuotes); // Reshuffle when cycle completes

  // Detect terminal request
  const userAgent = req.headers["user-agent"] || "";
  const isCurl = /curl|wget/i.test(userAgent);

  if (isCurl) {
    res.setHeader("Content-Type", "text/plain");
    return res.send(colorize(`"${quote}"`)); // Send colored quote
  }

  // Modern HTML response for browsers
  const htmlResponse = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Daily Quotes</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            body {
                background: linear-gradient(to right, #667eea, #764ba2);
                font-family: Arial, sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                text-align: center;
            }
            .quote-box {
                background: rgba(255, 255, 255, 0.2);
                padding: 30px;
                border-radius: 15px;
                backdrop-filter: blur(10px);
                color: white;
                font-size: 1.5rem;
                box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
            }
            .quote {
                font-style: italic;
            }
        </style>
    </head>
    <body>
        <div class="quote-box">
            <p class="quote">"${quote}"</p>
            <p class="text-sm mt-3 opacity-80">🔄 Refresh for a new quote</p>
        </div>
    </body>
    </html>`;

  res.setHeader("Content-Type", "text/html");
  res.send(htmlResponse);
});
app.use("/unison", unisonRoute);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
