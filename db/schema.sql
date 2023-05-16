-- Create a new database named "food_recipe_app"
CREATE DATABASE food_recipe_app;

-- Use the new database
USE food_recipe_app;

-- Create a table for recipes
CREATE TABLE recipes (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image VARCHAR(255) NOT NULL,
  ingredients TEXT NOT NULL,
  instructions TEXT NOT NULL,
  PRIMARY KEY (id)
);