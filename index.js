const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the tree store API");
});

app.get("/trees", async (req, res) => {
  try {
    const trees = await db.collection("trees").find().toArray();
    res.json(trees);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
