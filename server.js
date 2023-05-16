// server.js
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

// Set up Handlebars as template 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));


// Set up routes here
// Render the homepage
app.get('/', (req, res) => {
    res.render('homepage'); // Assuming Handlebars as template
  });
  
  // Render the login page
  app.get('/login', (req, res) => {
    res.render('login');
  });


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
