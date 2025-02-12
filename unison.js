const express = require("express");
const figlet = require("figlet");

const router = express.Router();

// Function to generate Unison response
const generateUnisonResponse = () => {
  const asciiBanner = figlet.textSync("UNISON", {
    font: "Small", // Try "Mini" or "Tiny" for a smaller output
    horizontalLayout: "default",
    verticalLayout: "default",
  });

  return `\x1b[36m${asciiBanner}\x1b[0m

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
};

// Define the /unison route
router.get("/", (req, res) => {
  const responseText = generateUnisonResponse();

  // Detect terminal request
  const userAgent = req.headers["user-agent"] || "";
  const isCurl = /curl|wget/i.test(userAgent);

  if (isCurl) {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    return res.send(responseText);
  }

  res.send(`<pre>${responseText.replace(/\x1b\[\d+m/g, "")}</pre>`); // Remove ANSI codes for browser
});

module.exports = router;
