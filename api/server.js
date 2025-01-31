const e = require("express");
const express = require ("express");
const mongoose = require ("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

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