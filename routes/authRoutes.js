const User            = require('../models/user');
const jwt             = require('jwt-simple');
const { jwtSecret }   = require('../config/keys');
const passportService = require('../services/passport');
const passport        = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false});

function tokenForUser(user) {
  const timestamp = new Date().getTime();

  return jwt.encode({ sub: user.id, iat: timestamp }, jwtSecret);
}

module.exports = app => {
  app.get('/backend', requireAuth, (req, res) => {
    res.send('This is the backend server!');
  });

  app.post('/api/signup', (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    if (!name || !email || !password) {
      return res.status(422).send({ error: 'You must provide all fields.' });
    }

    User.findOne({ email: email }, (err, existingUser) => {
      if (err) { next(err); }
      if (existingUser) { res.status(422).send({ error: 'Email is in use!' }); }

      const user = new User({
        name: name,
        email: email,
        password: password
      });

      user.save((err) => {
        if (err) { next(err); }
        
        res.json({ token: tokenForUser(user), name: user.name });
      });
    });
  });

  app.post('/api/signin', requireSignin, (req, res, next) => {
    res.send({ token: tokenForUser(req.user), name: req.user.name });
  });

  app.get('/api/current_user', requireAuth, (req, res) => {
    res.send(req.user);
  })
}