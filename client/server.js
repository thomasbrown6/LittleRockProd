const express = require("express");
const connectDB = require("./config/cosmosdb");
const path = require("path");

const app = express();

//connect database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

//routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

app.use(express.static(path.join(__dirname, "build")));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));