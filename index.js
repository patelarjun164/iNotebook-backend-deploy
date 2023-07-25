const express = require('express');
const connectToMongo = require("./db");
var cors = require('cors')

connectToMongo();
const app = express();
var corsOptions = {
  origin: 'https://inotebookbackendapi.onrender.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
const PORT = process.env.PORT || 5000;
app.use(express.json());

//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(PORT, ()=> {
    console.log("iNotebook App listening at port" + PORT);
})
