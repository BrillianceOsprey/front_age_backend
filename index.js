// // index.js
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");
// require("dotenv").config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// connectDB();

// // Routes
// const itemRoutes = require("./routes/itemRoutes");
// app.use("/posts", itemRoutes);

// // Example route
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// // Start the server
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

const userRoutes = require("./routes/userRoutes");
const vacancyRoutes = require("./routes/vacancyRoutes");

app.use("/users", userRoutes);
app.use("/vacancies", vacancyRoutes);

app.get("/", (req, res) => res.send("API is running..."));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
