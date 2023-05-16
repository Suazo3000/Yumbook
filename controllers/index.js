const express = require('express');
const router = express.Router();
const { User, Recipe } = require('../models');

// Define your routes here
// Create a new user
router.post('/users', async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  });
  
  // Get all users
  router.get('/users', async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  });
  
  // Create a new recipe
  router.post('/recipes', async (req, res) => {
    try {
      const newRecipe = await Recipe.create(req.body);
      res.status(201).json(newRecipe);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create recipe' });
    }
  });
  
  // Get all recipes
  router.get('/recipes', async (req, res) => {
    try {
      const recipes = await Recipe.findAll();
      res.json(recipes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch recipes' });
    }
  });
module.exports = router;