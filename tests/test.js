const User = require('../models/User');
const Recipe = require('../models/Recipe');
// Other necessary imports and configurations

// Create a new user
const createUser = async () => {
    try {
      const newUser = await User.create({
        name: 'TestUser1',
        password: 'password123',
      });
      console.log('New user created:', newUser);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  
  createUser();


  const fetchRecipes = async () => {
    try {
      const user = await User.findOne({ where: { name: 'TestUser1' } });
  
      const recipes = await Recipe.findAll({ where: { userId: user.id } });
      console.log('Fetched recipes:', recipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };
  
  fetchRecipes();


  // Add recipes
  const addRecipes = async () => {
    try {
      const user = await User.findOne({ where: { name: 'TestUser1' } });
  
      const recipes = [
        { name: 'Recipe 1', description: 'This is recipe 1', userId: user.id },
        { name: 'Recipe 2', description: 'This is recipe 2', userId: user.id },
      ];
  
      const createdRecipes = [];
  
      for (const recipe of recipes) {
        const existingRecipe = await Recipe.findOne({ where: { name: recipe.name, userId: recipe.userId } });
  
        if (!existingRecipe) {
          const createdRecipe = await Recipe.create(recipe);
          createdRecipes.push(createdRecipe);
        }
      }
  
      console.log('Recipes added:', createdRecipes);
    } catch (error) {
      console.error('Error adding recipes:', error);
    }
  };
  
  addRecipes();