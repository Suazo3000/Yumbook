const User = require('./User');
const Recipe = require('./Recipe');
const Journal = require('./Journal')

// Add associations here
User.hasMany(Recipe, { foreignKey: 'user_id' });
Recipe.belongsTo(User, { foreignKey: 'user_id' });
Journal.belongsTo(User, { foreignKey: 'user_id' });
module.exports = { User, Recipe, Journal };