'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', (req, res, next) => res.send('XiTickets Backend API (<a href="https://github.com/XiTickets/Backend">https://github.com/XiTickets/Backend</a>)'));
  router.get('/api', server.loopback.status());
  server.use(router);
};
