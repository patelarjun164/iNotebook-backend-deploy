const express = require('express');
const connectToMongo = require("./db");
var cors = require('cors')

connectToMongo();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
app.use(express.json());

const API_URL = "https://inotebookbackendapi.onrender.com";

//Available Routes
app.use(`${API_URL}/api/auth`, require('./routes/auth'));
app.use(`${API_URL}/api/notes`, require('./routes/notes'));

app.listen(PORT, ()=> {
    console.log("iNotebook App listening at port" + PORT);
})
