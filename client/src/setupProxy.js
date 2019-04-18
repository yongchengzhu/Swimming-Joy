const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy(['/backend', '/api/signup', '/api/signin', '/api/current_user'], { target: 'http://localhost:5000' }));
}