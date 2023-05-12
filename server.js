// server.js
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

// Set up Handlebars as the template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Serve static files from the public folder
app.use(express.static('public'));

// Set up your routes here
// Render the homepage
app.get('/', (req, res) => {
    res.render('homepage'); // Assuming Handlebars as the template engine
  });
  
  // Render the login page
  app.get('/login', (req, res) => {
    res.render('login');
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});