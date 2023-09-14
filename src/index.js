require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const version1 = require('./versionRoute');
const expressLayouts = require('express-ejs-layouts');

const app = express();

//DB connection
// require("./database/connectDB");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use('/api', version1);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('This is razorpay Backend');
});