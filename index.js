const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const app = express();
require("dotenv").config();

// CORS configuration
const corsOptions = {
    origin: "https://ticticket-frontend-juzvbhz8p-sakutsadragons-projects.vercel.app", // Your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // If you need to allow cookies
    optionsSuccessStatus: 204 // For legacy browsers that return 200 for successful OPTIONS requests
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));  // Handle preflight requests for all routes
app.use(express.json());
app.use("/api/auth", userRoutes);
app.use("/api/autha", adminRoutes);

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB connected Successfully!!!");
    }).catch((err) => {
        console.log(err.message);
    });

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is connected !!! ${process.env.PORT}`);
});
