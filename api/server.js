const express = require("express");
const mongoose = require ("mongoose");
const usersRouter = require('./routes/users');
const authRouter  = require('./routes/auth');
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDb Bağlantısı Başarılı"))
    .catch(err => console.log("MongoDB Bağlantısı Başarısız!", err));


app.get("/", (req, res) => {
    res.send("API çalışıyor!!");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, ()=> console.log(`Sunucu ${PORT} portunda çalışıyor`))