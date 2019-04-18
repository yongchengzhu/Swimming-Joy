const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const express    = require('express');
const keys       = require('./config/keys');
const cors       = require('cors');
const app        = express();

// Database Setup
mongoose.set('useNewUrlParser', true);
mongoose.connect(keys.mongoURI);
require("./models/user");

// App Setup
app.use(bodyParser.json({ type: "*/*" }));
app.use(cors());

// Routes Setup
require('./routes/authRoutes')(app);

// Production Setup
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port);