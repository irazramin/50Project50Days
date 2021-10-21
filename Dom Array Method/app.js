const main = document.getElementById('main');
const addUser = document.getElementById('add-user');
const doubleMoneyBtn = document.getElementById('double-money');
const millionaries = document.getElementById('millionaries');
const sortByRichest = document.getElementById('sort-richest');
const calculateEntrier = document.getElementById('calculate-entier');

let data = [];

async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();
  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.first}`,
    money: Math.floor(Math.random() * 1000000),
  };
  console.log(newUser);
  addNewUser(newUser);
}

//add new obj to array
function addNewUser(obj) {
  data.push(obj);
  updateDom();
}

//update dom
function updateDom(providePerson = data) {
  main.innerHTML = `<h2><strong>Person</strong>Wealth</h2>`;
  providePerson.forEach((item) => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong>${formetNumber(
      item.money
    )}`;
    main.appendChild(element);
  });
}

function doubleMoney() {
  data = data.map((item) => {
    return { ...item, money: item.money * 2 };
  });
  updateDom();
}

// money formet
function formetNumber(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// sort by richest
function sortRichest() {
  data.sort((a, b) => b.money - a.money);
  updateDom();
}

//calcaulte total wealth
function totalWealth() {
  const wealth = data.reduce((acc, item) => (acc += item.money), 0);
  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3>Total Wealth <strong>${formetNumber(
    wealth
  )}</strong></h3>`;
  main.appendChild(wealthEl);
  console.log(wealth)
}
//show millionaier
function showMillionaries() {
  data = data.filter((item) => item.money > 1000000);
  updateDom();
}
addUser.addEventListener('click', getRandomUser);
doubleMoneyBtn.addEventListener('click', doubleMoney);
sortByRichest.addEventListener('click', sortRichest);
millionaries.addEventListener('click', showMillionaries);
calculateEntrier.addEventListener('click', totalWealth);
