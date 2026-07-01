
// mongodb+srv://<db_username>:<db_password>@cluster0.ut4rjrj.mongodb.net/?appName=Cluster0

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");


// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
// Serve static files
app.use(express.static(path.join(__dirname, "public")));


// Import Routes
const studentRoutes = require("./routes/studentRoutes");

// Use Routes
app.use("/students", studentRoutes);


// Test Route
app.get("/", (req, res) => {
    res.send("Welcome to Student Management API");
});

// Server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});