const figlet = require("figlet");

// Generate ASCII Text Response
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

\x1b[36m$ curl -L janeesh.me/unison\x1b[0m   # Get API Info  
\x1b[36m$ curl -L janeesh.me/quote\x1b[0m   # Get a quote  
\x1b[36m$ curl -L janeesh.me/joke\x1b[0m   # Get a joke  

\x1b[32m💻 Tech Stack:\x1b[0m
---------------------------------------
- Node.js 🟢
- Express.js 🚀
- JavaScript ⚡

\x1b[35m✨ Made with passion. Keep Hustling! ✨\x1b[0m`;
};

// Cool HTML Page Response
const htmlPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UNISON API</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            background-color: #121212; 
            color: #fff; 
            text-align: center;
            padding: 20px; 
        }
        h1 { color: #00eaff; font-size: 3rem; }
        p { font-size: 1.2rem; }
        .container { max-width: 700px; margin: 0 auto; }
        .link { 
            display: block; 
            color: #ffcc00; 
            font-size: 1.3rem; 
            margin: 10px 0;
            text-decoration: none;
        }
        .link:hover { color: #ff6600; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 UNISON API</h1>
        <p>A simple API serving quotes and jokes with colorful output.</p>

        <h2>📌 Available Endpoints</h2>
        <a class="link" href="/quote">🔹 /quote - Get a random quote</a>
        <a class="link" href="/joke">🔹 /joke - Get a random joke</a>
        <a class="link" href="/unison">🔹 /unison - Read API info</a>

        <h2>💡 Usage</h2>
        <p>Run the following commands in your terminal:</p>
        <pre style="background:#222; padding:10px; border-radius:5px;">
        curl -L janeesh.me/unison
        curl -L janeesh.me/quote
        curl -L janeesh.me/joke
        </pre>

        <h2>💻 Tech Stack</h2>
        <p>Node.js 🟢 | Express.js 🚀 | JavaScript ⚡</p>
        
        <p>✨ Made with passion. Keep Hustling! ✨</p>
    </div>
</body>
</html>
`;

module.exports = { generateUnisonResponse, htmlPage };
