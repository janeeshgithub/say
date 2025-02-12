const figlet = require("figlet");

const generateUnisonResponse = () => {
  const asciiBanner = figlet.textSync("UNISON", {
    font: "Small",
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
🔹 \x1b[35m/quote\x1b[0m   - Get a random quote  
🔹 \x1b[35m/joke\x1b[0m    - Get a random joke  
🔹 \x1b[35m/unison\x1b[0m  - Read README.md  

\x1b[31m💡 Usage:\x1b[0m
---------------------------------------
Run the following commands to fetch data:

\x1b[36m$ curl -L yourdomain.com\x1b[0m   # Get the API Info  
\x1b[36m$ curl -L yourdomain.com/quote\x1b[0m   # Get a quote  
\x1b[36m$ curl -L yourdomain.com/joke\x1b[0m   # Get a joke  

\x1b[32m💻 Tech Stack:\x1b[0m
---------------------------------------
- Node.js 🟢
- Express.js 🚀
- JavaScript ⚡

\x1b[35m✨ Made with passion. Keep Hustling! ✨\x1b[0m`;
};

module.exports = { generateUnisonResponse };
