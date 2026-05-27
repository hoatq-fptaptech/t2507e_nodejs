const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require('./config/db');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
const routes = require('./routes/index');
app.use("/api/v1",routes);

