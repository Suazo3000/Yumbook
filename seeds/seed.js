const { User, Recipe } = require('../models');
const userData = require('./seedData');
const seedDatabase = async () => {
  try {
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    console.log('Seed data inserted successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Error inserting seed data:', error);
    process.exit(1);
  }
};
seedDatabase();