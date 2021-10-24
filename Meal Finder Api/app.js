const search = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const submit = document.getElementById('submit');
const randomBtn = document.getElementById('random');
const reasultHeading = document.getElementById('results-heading');
const singleMeal = document.getElementById('single-meals');
const meals = document.getElementById('meals');

//get random meal
function randomMeal(){
  meals.innerHTML = ''
  reasultHeading.innerHTML = ''
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`).
  then(res => res.json()).
  then(data => {
    const random = data.meals[0]
    addDataToDom(random)
  })
}

  //get meal by id
  function getMealById(mealID) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`).
    then((res) => res.json()).then((data) => {
      const meal = data.meals[0];
      addDataToDom(meal);
    });
  }

  // add data to dom
  function addDataToDom(meal) {
    const ingredients = [];

    for (let i = 1; i < 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
        console.log(111)
      } else {
        break;
      }
    }
    singleMeal.innerHTML = `
          <div class='single-meal'>
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
            <div class="single-meal-info">
                ${meal.strCategory ? `<p> ${meal.strCategory }</p>` : ''}
                ${meal.strArea ? `<p> ${meal.strArea }</p>` : ''}
            </div>
            <div class="main">
                <p>${meal.strInstructions}</p>
                <h2>Ingredients</h2>
                <ul>
                    ${ingredients.map(item => `<li>${item}</li>`).join('')}
                
                </ul>
            </div>
          </div>
    `;
  }
//fetch api
function searchMealApi(e) {
  e.preventDefault();
  singleMeal.innerHTML = '';
  const term = search.value;
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        reasultHeading.innerHTML = `<h2>Search result for '${term}'</h2>`;

        if (data.meals == null) {
          reasultHeading.innerHTML = `<p>There is no search results.try again!</p>`;
        } else {
          meals.innerHTML = data.meals
            .map(
              (meal) => `
            <div class="meal">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
                <div class="meal-info" data-mealID="${meal.idMeal}">
                <h3>
                    ${meal.strMeal}
                </h3>
                </div>
            </div>
        `
            )
            .join('');
        }
        search.value = '';
      });
  } else {
    alert('Please enter keyword');
  }
}

//Event listener
submit.addEventListener('submit', searchMealApi);
randomBtn.addEventListener('click', randomMeal);

meals.addEventListener('click', (e) => {
  const mealInfo = e.path.find((item) => {
    if (item.classList) {
      return item.classList.contains('meal-info');
    } else {
      return false;
    }
  });
  if (mealInfo) {
    const mealID = mealInfo.getAttribute('data-mealid');
    getMealById(mealID);
  }
});
