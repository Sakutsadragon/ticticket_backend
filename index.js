const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const app = express();
require("dotenv").config();
const corsOptions = {
    origin: "https://ticticket-frontend.vercel.app",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", 
    credentials: true, 
    optionsSuccessStatus: 204 ,
};

app.use(cors(corsOptions));
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
