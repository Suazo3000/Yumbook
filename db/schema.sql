USE yumbook_db;


-- CREATE TABLE IF NOT EXISTS Users (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   username VARCHAR(50) NOT NULL,
--   password VARCHAR(50) NOT NULL,
--   email VARCHAR(100) NOT NULL,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE IF NOT EXISTS Recipes (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   title VARCHAR(100) NOT NULL,
--   description TEXT,
--   instructions TEXT,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   user_id INT,
--   FOREIGN KEY (user_id) REFERENCES Users(id)
-- );

-- CREATE TABLE IF NOT EXISTS Ingredients (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(100) NOT NULL,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE IF NOT EXISTS RecipeIngredients (
--   recipe_id INT,
--   ingredient_id INT,
--   PRIMARY KEY (recipe_id, ingredient_id),
--   FOREIGN KEY (recipe_id) REFERENCES Recipes(id),
--   FOREIGN KEY (ingredient_id) REFERENCES Ingredients(id)
-- );
