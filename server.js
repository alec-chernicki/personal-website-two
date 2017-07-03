const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const expressValidator = require('express-validator');
const path = require('path');

/**
 * Create Express server
 */
const app = express();

/**
 * Express configuration
 */
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'public'));
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

/**
 * Controllers
 */
const emailController = require('./server/controllers/emailController.js');


/**
 * Routes
 */
app.post('/api/email', emailController.postHome);

/**
 * Error Handler, in case the everything dies.
 */
app.use((err, req, res) => {
  console.error(err.stack); // eslint-disable-line no-console

  res.sendStatus(500).send('Something broke!');
});

/**
 * Initialize Express server, let's fire this baby up!
 */
app.listen(app.get('port'), () => {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env')); // eslint-disable-line no-console
});

module.exports = app;
