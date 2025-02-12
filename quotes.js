const fs = require("fs");
const path = require("path");

const quotesFilePath = path.join(__dirname, "quotes.json");

// Function to read quotes from JSON
const getQuotes = () => {
  const data = fs.readFileSync(quotesFilePath, "utf-8");
  return JSON.parse(data);
};

// HTML Template
const htmlTemplate = `
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
        <p class="quote">"{{QUOTE}}"</p>
        <p class="text-sm mt-3 opacity-80">🔄 Refresh for a new quote</p>
    </div>
</body>
</html>`;

module.exports = { getQuotes, htmlTemplate };
