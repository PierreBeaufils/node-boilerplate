if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const sanitizeHtml = require('sanitize-html');
const server = express();
const router = require('./router');

const port = process.env.PORT || 3000;

/* For session, express-session
 const session = require('express-session');

server.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 60 * 24,
  },
}));
*/

// middleware to access to req.body
server.use(express.urlencoded({ extended: true }));

server.use(express.json());

// sanitizeHtml middleware to escape html that could be typed in req.body
server.use((req, res, next) => {
  if (req.body) {
    for (const property in req.body) {
      req.body[property] = sanitizeHtml(req.body[property], {
        allowedTags: [],
        allowedAttributes: {}
      });
    }
  }
  next();
});

server.use('/api', router);


// Serve the front end files when in production environment, change path or remove if not needed
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  server.use(express.static(path.join(__dirname, 'client/dist')));
  // Handle React routing, return all requests to React app
  server.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
  });
}


server.launch = () => {
  server.listen(port, () => console.log(`Server running on http://localhost:${port}`));
};

// toutes les promesses qu'on n'entoure pas d'un try/catch seront automatiquement stoppées ici si elles sont rejetées
process.on('unhandledRejection', (err) => {
  console.log('Interception d\'un rejet de promesse');
  console.error(err);
});

module.exports = server;