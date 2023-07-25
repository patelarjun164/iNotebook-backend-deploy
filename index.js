const express = require('express');
const connectToMongo = require("./db");
var cors = require('cors')

connectToMongo();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
app.use(express.json());

//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(PORT, ()=> {
    console.log("iNotebook App listening at port" + PORT);
})
