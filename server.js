const express = require("express");
//const bodyParser = require("body-parser");
const connectDB = require("./config/cosmosdb");
const path = require("path");

const app = express();

//connect database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));
//app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
//app.use(bodyParser.json({ limit: "50mb" }));

//routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/events", require("./routes/api/images"));
app.use("/api/calendar", require("./routes/api/calendar"));
app.use("/api/keys", require("./routes/api/keys"));

//app.use(express.static(path.join(__dirname, "build")));

// Serve static assets in production
//if (process.env.NODE_ENV === "production") {
// Set static folder
app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
//}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
