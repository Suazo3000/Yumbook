const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const recipeDetailsContent = document.querySelector('recipe-details-content');
const searchInput = document.getElementById('search-input');

// Event listeners
searchBtn.addEventListener('click', getRecipesList);
searchInput.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    getRecipesList();
  }
});

// Get recipe list that matches the search keywords
function getRecipesList() {
  let searchInputTxt = searchInput.value.trim();
  console.log(searchInputTxt);

  const applicationId = '2ae87e38';
  const applicationKey = '41a3d8a8bd10b628606cd773556b2a8e';

  const recipeApiUrl = `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${searchInputTxt}&app_id=${applicationId}&app_key=${applicationKey}`;

  fetch(recipeApiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let recipes = [];
      const recipeEl = document.createElement('p')
      const recipeContainer = document.createElement('div')
      if (data.hits) {
        data.hits.forEach(hit => {
          const recipe = hit.recipe;
          const recipeId = recipe.uri;
          const recipeImage = recipe.image;
          const recipeTitle = recipe.label;
          console.log(recipe)
          recipeContainer.innerHTML += 
              `<div class="recipe-item" >
                  <div class="recipe-img-box">
                      <img class="recipe-img" src="${recipe.images.LARGE.url}" alt="food"></img>
                  </div>
                  <div class="recipe-name">
                      <h2>${recipe.label}</h2> <a href="#" class="fas fa-heart"></a>
                      <a href="${recipe.url}" class="recipe-btn">Get Recipe</a>
                  </div>
                    <h4>Calories:${recipe.calories}</h4>
                </div>
              `;
          document.querySelector('.recipe-result').append(recipeContainer)
        });

      }
      // Handlebars template rendering
      // const template = Handlebars.compile(document.getElementById('recipe-template-1').innerHTML);
      // const html = template({ recipes: recipes });
      // mealList.innerHTML = html;

    })
    .catch(error => {
      console.error('Error:', error);
    });
}
