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

\x1b[35m🎨 Portfolio:\x1b[0m  
🔗 \x1b[36mloop-indol-omega.vercel.app\x1b[0m  

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
        @keyframes glow {
            0% { text-shadow: 0 0 5px #ff0000, 0 0 10px #ff7300, 0 0 15px #fffb00; }
            50% { text-shadow: 0 0 10px #00ff00, 0 0 20px #00aaff, 0 0 30px #aa00ff; }
            100% { text-shadow: 0 0 5px #ff0000, 0 0 10px #ff7300, 0 0 15px #fffb00; }
        }
        body {
            font-family: Arial, sans-serif;
            background-color: #121212;
            color: white;
            text-align: center;
            padding: 20px;
        }
        h1 {
            color: #00d4ff;
            font-size: 2.8rem;
            animation: glow 2s infinite alternate;
        }
        .container {
            max-width: 650px;
            margin: auto;
            background: linear-gradient(135deg, #2c2c2c, #3b3b3b);
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.2);
        }
        a {
            color: #ffcc00;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s ease-in-out;
        }
        a:hover {
            text-decoration: underline;
            color: #00ffcc;
        }
        .highlight {
            color: #ff7300;
            font-weight: bold;
        }
        .glowing-text {
            font-size: 1.2rem;
            font-weight: bold;
            color: #ffcc00;
            text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 JANEESH Open Source</h1>
        <p class="glowing-text">For people interested in doing projects!</p>

        <h2>🌐 Website:</h2>
        <p><a href="https://official-website-olive.vercel.app" target="_blank">official-website-olive.vercel.app</a></p>

        <h2>🎨 Portfolio:</h2>
        <p><a href="https://loop-indol-omega.vercel.app" target="_blank">loop-indol-omega.vercel.app</a></p>

        <h2>📌 GitHub Repository:</h2>
        <p><a href="https://github.com/Unison-OpenSource" target="_blank">github.com/Unison-OpenSource</a></p>

        <h2>💬 WhatsApp Community:</h2>
        <p><a href="https://chat.whatsapp.com/BwecV6bo5Ks9EhyTJS8tuc" target="_blank">Join on WhatsApp</a></p>

        <h2>📋 Sign Up & Start Contributing:</h2>
        <p><a href="https://forms.gle/5WNcmLber1UVkLhZA" target="_blank">Sign Up Here</a></p>

        <h2>💻 Tech Stack:</h2>
        <p>Node.js 🟢 | Express.js 🚀 | JavaScript ⚡</p>

        <h3 class="highlight">✨ Join Us & Build Together! Keep Hustling! ✨</h3>
    </div>
</body>
</html>`;

  return { terminalOutput, htmlOutput };
};

module.exports = { janeesh };
