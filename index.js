const express = require('express');
const app     = express();

// Routes Setup
app.get('/backend', (req, res) => {
  res.send('This is the backend server!');
});

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