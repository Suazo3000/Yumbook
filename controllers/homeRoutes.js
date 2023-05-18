const express = require('express');
const router = express.Router();
const { User, Recipe } = require('../models');

// Render the homepage
router.get('/', async (req, res) => {
  try {
    // Fetch data or perform any necessary operations
    // pass the data to the homepage template
    res.render('homepage', { /* data */ });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to render homepage' });
  }
});
// Render the login page
router.get('/login', async (req, res) => {
  try {
    // Fetch data or perform any necessary operations
    // and pass the data to the login page template
    res.render('login', { /* data */ });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to render login page' });
  }
});

// Render the signup page
router.get('/signup', async (req, res) => {
  try {
    //fetch data or perform any necessary opp
    // pass data to the signup page temp
    res.render('signup', {});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to render signup page'})
  }
}
)
module.exports = router;