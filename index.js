require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require('./config/db');
// Tao server side
connectDB()
    .then(()=>{
        app.listen(port, () => {
            console.log(`Listening on port: ${port}`);
        })
    }).catch((err)=>{
        console.log(err.message);
        process.exit(1);
    });



app.get('/', (req, res) => {
    res.send("<h1>Hello World! ABC</h1>");
})
app.get('/about', (req, res) => {
    res.send("<h1>About Me!</h1>");
})