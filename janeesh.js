const figlet = require("figlet");

const janeesh = () => {
  const asciiBanner = figlet.textSync("JANEESH", {
    font: "Small",
    horizontalLayout: "default",
    verticalLayout: "default",
  });

  const terminalOutput = `\x1b[36m${asciiBanner}\x1b[0m

\x1b[33m🚀 Open Source – For People Interested in Doing Projects!\x1b[0m
--------------------------------------------------------------------
Join our open-source initiative and collaborate on exciting projects!  

\x1b[34m🌐 Website:\x1b[0m 
🔗 \x1b[36mofficial-website-olive.vercel.app\x1b[0m

\x1b[32m📌 GitHub Repository:\x1b[0m  
🔗 \x1b[36mgithub.com/Unison-OpenSource\x1b[0m  

\x1b[35m💬 WhatsApp Community:\x1b[0m  
🔗 \x1b[36mchat.whatsapp.com/BwecV6bo5Ks9EhyTJS8tuc\x1b[0m  

\x1b[31m📋 Sign Up & Start Contributing:\x1b[0m  
🔗 \x1b[36mforms.gle/5WNcmLber1UVkLhZA\x1b[0m  

\x1b[32m💻 Tech Stack:\x1b[0m
--------------------------------------------------------------------
- Node.js 🟢
- Express.js 🚀
- JavaScript ⚡

\x1b[35m✨ Join Us & Build Together! Keep Hustling! ✨\x1b[0m`;

  const htmlOutput = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JANEESH Open Source</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1e1e1e;
            color: white;
            text-align: center;
            padding: 20px;
        }
        h1 {
            color: #00d4ff;
            font-size: 2.5rem;
        }
        .container {
            max-width: 600px;
            margin: auto;
            background: #2c2c2c;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
        }
        a {
            color: #ffcc00;
            text-decoration: none;
            font-weight: bold;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 JANEESH Open Source</h1>
        <p>For people interested in doing projects!</p>

        <h2>🌐 Website:</h2>
        <p><a href="https://official-website-olive.vercel.app" target="_blank">official-website-olive.vercel.app</a></p>

        <h2>📌 GitHub Repository:</h2>
        <p><a href="https://github.com/Unison-OpenSource" target="_blank">github.com/Unison-OpenSource</a></p>

        <h2>💬 WhatsApp Community:</h2>
        <p><a href="https://chat.whatsapp.com/BwecV6bo5Ks9EhyTJS8tuc" target="_blank">Join on WhatsApp</a></p>

        <h2>📋 Sign Up & Start Contributing:</h2>
        <p><a href="https://forms.gle/5WNcmLber1UVkLhZA" target="_blank">Sign Up Here</a></p>

        <h2>💻 Tech Stack:</h2>
        <p>Node.js 🟢 | Express.js 🚀 | JavaScript ⚡</p>

        <h3>✨ Join Us & Build Together! Keep Hustling! ✨</h3>
    </div>
</body>
</html>`;

  return { terminalOutput, htmlOutput };
};

module.exports = { janeesh };
