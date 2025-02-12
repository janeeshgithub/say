const fs = require("fs");
const path = require("path");

// Read jokes from JSON file
const getJokes = () => {
  const filePath = path.join(__dirname, "jokes.json");
  const jokesData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jokesData);
};

// HTML Template for jokes (similar to quotes)
const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Joke of the Day</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background-color: #f8f9fa; }
        .container { max-width: 600px; margin: auto; padding: 20px; background: white; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); }
        h1 { color: #333; }
        p { font-size: 20px; color: #555; }
    </style>
</head>
<body>
    <div class="container">
        <h1>😂 Joke of the Day</h1>
        <p>"{{JOKE}}"</p>
    </div>
</body>
</html>
`;

module.exports = { getJokes, htmlTemplate };
