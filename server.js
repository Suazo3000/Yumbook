// server.js
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const app = express();
const port = 3000;
const router = require('./controllers')

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up Handlebars as template 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));


// Set up routes here
app.use(router);

// Start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
