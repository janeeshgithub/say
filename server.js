const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");
const quotes = require("./quotes");
const jokes = require("./jokes"); // Import jokes from jokes.js

const figlet = require("figlet");

const app = express();
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
  "\x1b[96m", // Bright Cyan
];

// Function to add random color to text
const colorize = (text) => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return `${randomColor}${text}\x1b[0m`; // Reset color at the end
};

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

  res.json({ quote });
});

app.get("/unison", (req, res) => {
  const asciiBanner = figlet.textSync("UNISON", {
    font: "Small", // Try "Mini" or "Tiny" for an even smaller output
    horizontalLayout: "default",
    verticalLayout: "default",
  });

  const responseText = `\x1b[36m${asciiBanner}\x1b[0m

\x1b[33m🚀 Welcome to Axiom API\x1b[0m
---------------------------------------
A simple API serving quotes and jokes 
with colorful terminal output.

\x1b[34m🌟 Features:\x1b[0m
- 🔥 Fetch motivational quotes
- 🎭 Get random jokes
- 📖 Read README.md in style

\x1b[32m📌 Available Endpoints:\x1b[0m
---------------------------------------
🔹 \x1b[35m/\x1b[0m         - Get a random quote  
🔹 \x1b[35m/joke\x1b[0m     - Get a random joke  
🔹 \x1b[35m/unison\x1b[0m   - Read README.md  

\x1b[31m💡 Usage:\x1b[0m
---------------------------------------
Run the following commands to fetch data:

\x1b[36m$ curl -L janeesh.me\x1b[0m   # Get a quote  
\x1b[36m$ curl -L janeesh.me/joke\x1b[0m   # Get a joke  
\x1b[36m$ curl -L janeesh.me/unison\x1b[0m   # Read the README  

\x1b[32m💻 Tech Stack:\x1b[0m
---------------------------------------
- Node.js 🟢
- Express.js 🚀
- JavaScript ⚡

\x1b[35m✨ Made with passion. Keep Hustling! ✨\x1b[0m`;

  // Detect terminal request
  const userAgent = req.headers["user-agent"] || "";
  const isCurl = /curl|wget/i.test(userAgent);

  if (isCurl) {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    return res.send(responseText);
  }

  res.send(`<pre>${responseText.replace(/\x1b\[\d+m/g, "")}</pre>`); // Remove ANSI codes for browser
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
