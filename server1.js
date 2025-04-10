const express = require("express");
const axios = require("axios"); // For making HTTP requests
const path = require("path");

const app = express();
const port = 5000;

// Serve static files (e.g., CSS, images) from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dog.html"));
});

// API endpoint to fetch random neko image
app.get("/api/neko", async (req, res) => {
  try {
    const response = await axios.get("https://nekos.best/api/v2/neko");
    const imageUrl = response.data.results[0].url;
    console.log(response.data);
    res.json({ imageUrl });
  } catch (error) {
    console.error("Error fetching image:", error);
    res.status(500).json({ message: "Error fetching image" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
