const express = require("express");
const cors = require("cors");
const axios = require("axios");

const { getQuotes, htmlTemplate: quotesHtml } = require("./quotes");
const { getJokes, htmlTemplate: jokesHtml } = require("./jokes");
const { generateUnisonResponse } = require("./unison");
const { janeesh } = require("./janeesh");

const app = express();
app.use(cors());

const quotes = getQuotes();
const jokes = getJokes();
let currentIndex = 0;

// ANSI Color Codes for terminal output
const colors = [
  "\x1b[31m",
  "\x1b[32m",
  "\x1b[33m",
  "\x1b[34m",
  "\x1b[35m",
  "\x1b[36m",
  "\x1b[91m",
  "\x1b[92m",
  "\x1b[93m",
  "\x1b[94m",
  "\x1b[95m",
  "\x1b[96m",
];

// Function to add random color to text
const colorize = (text) => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return `${randomColor}${text}\x1b[0m`;
};

// 📜 Home Route (Unison)
app.get("/unison", (req, res) => {
  const responseText = generateUnisonResponse();

  // Detect terminal request
  const userAgent = req.headers["user-agent"] || "";
  const isCurl = /curl|wget/i.test(userAgent);

  if (isCurl) {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    return res.send(responseText);
  }

  // Remove ANSI codes for HTML response
  res.send(`<pre>${responseText.replace(/\x1b\[\d+m/g, "")}</pre>`);
});

// 📜 Quote Endpoint
app.get("/quote", (req, res) => {
  const quote = quotes[currentIndex];
  currentIndex = (currentIndex + 1) % quotes.length;

  const userAgent = req.headers["user-agent"] || "";
  const isCurl = /curl|wget/i.test(userAgent);

  if (isCurl) {
    res.setHeader("Content-Type", "text/plain");
    return res.send(colorize(`"${quote}"`));
  }

  const htmlResponse = quotesHtml.replace("{{QUOTE}}", quote);
  res.setHeader("Content-Type", "text/html");
  res.send(htmlResponse);
});

// 🤣 Joke Endpoint
app.get("/joke", (req, res) => {
  const joke = jokes[currentIndex];
  currentIndex = (currentIndex + 1) % jokes.length;

  const userAgent = req.headers["user-agent"] || "";
  const isCurl = /curl|wget/i.test(userAgent);

  if (isCurl) {
    res.setHeader("Content-Type", "text/plain");
    return res.send(colorize(`"${joke}"`));
  }

  const htmlResponse = jokesHtml.replace("{{JOKE}}", joke);
  res.setHeader("Content-Type", "text/html");
  res.send(htmlResponse);
});

app.get("/", (req, res) => {
  const { terminalOutput, htmlOutput } = janeesh();

  // Detect terminal request
  const userAgent = req.headers["user-agent"] || "";
  const isCurl = /curl|wget/i.test(userAgent);

  if (isCurl) {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    return res.send(terminalOutput);
  }

  res.setHeader("Content-Type", "text/html");
  res.send(htmlOutput);
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
