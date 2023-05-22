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

// Render the homepage page
router.get('/home', async (req, res) => {
  try {
    res.render('homepage', {});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to render homepage page'})
  }
}
)

// Render the recipe page
router.get('/recipes', async (req, res) => {
  try {
 
    res.render('recipe', {});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to render recipe page'})
  }
}
)
// Render the journal page
router.get('/journal', async (req, res) => {
  try {
 
    res.render('journal', {});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to render journal page'})
  }
}
)
// Render the Team page
router.get('/team', async (req, res) => {
  try {
    res.render('team', {});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to render the Team page' });
  }
});

module.exports = router;