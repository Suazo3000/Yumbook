const express = require('express');
const router = express.Router();
const { User } = require('../../models');
const { Journal } = require("../../models")

// Create a user signup
router.post('/signup', async (req, res) => {
  try {
    const newUserSignup = await User.create(req.body);
    res.status(201).json(newUserSignup);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to SignUp new user'})
  }
});


// Create a new user
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

router.post('/login', async (req, res) => {
  try {
    console.log('login user data ===', req.body);
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log('login user error ===', err);
    res.status(400).json(err);
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Get a single user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

// Update a user by ID
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.update(req.body);
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// Delete a user by ID
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.destroy();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

// Create a new Journal
router.post('/journal', async (req, res) => {
  try {
    console.log('journal data from fe ===', req.body);
    const newJournal = await Journal.create(req.body);
    
    res.status(201).json(newJournal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create journal' });
  }
});
// Get all journal entries for a user
router.get('/journal', async (req, res) => {
  try {
    // Fetch the journal entries from the database based on the user ID
    const journalEntries = await Journal.findAll({
      where: { user_id: req.session.user_id }, // Adjust based on your user ID retrieval method
    });

    // Respond with the journal entries in JSON format
    res.json(journalEntries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch journal entries' });
  }
});

module.exports = router;