const balance = document.getElementById('balance');
const income = document.getElementById('income-plus');
const expanse = document.getElementById('expanse-minus');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const deleteBtn = document.getElementById('delete-btn');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const transactionBtn = document.getElementById('transBtn');

// get valu from local storage
const getValueFromLocalStroage =JSON.parse(localStorage.getItem('transactions'));
// const dummy = [
//   { id: 1, amount: -20, text: 'flower' },
//   { id: 2, amount: 300, text: 'camera' },
//   { id: 3, amount: -100, text: "salery" },
//   { id: 4, amount: 200, text: "rent" },
// ];
let transactions = localStorage.getItem('transactions') !== null ? getValueFromLocalStroage : [];

function addTransaction(e){
  e.preventDefault()
  if (text.value.trim() === '' || amount.value.trim()=== '') {
      alert('Please Enter Value');
  }else{
    const transaction = {
      id:generateID(),
      amount:+amount.value,
      text:text.value,
    }
    transactions.push(transaction);
    addListToDom(transaction)
    updateValue()
    updateLocalStorage()
    text.value = ''
    amount.value= ''
  }

}
function generateID(){
  return Math.floor(Math.random() * 100000000)
}
function addListToDom(transaction) {
  
  const sign = transaction.amount < 0 ? '-' : '+';

  const li = document.createElement('li');
  li.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

  li.innerHTML = `
    ${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span
  ><button class="delete-btn" id="delete-btn" onclick="removeTransaction(${transaction.id})">X</button>
</li>
  `
  list.appendChild(li)
}

//update value
function updateValue(){
    const amount = transactions.map(item => item.amount);
    const total = amount.reduce((acc,item) => (acc+=item),0).toFixed(2)

    const incomes = amount.filter(item => item > 0 )
    .reduce((acc,item) => (acc+=item),0).toFixed(2)

    const expanses = (amount.filter(item => item<0).
    reduce((acc,item) => (acc+=item),0)* 
    -1).toFixed(2)

    balance.innerText = `$${total}`
    income.innerText = `$${incomes}`
    expanse.innerText = `$${expanses}`
    console.log(expanse)
}

function updateLocalStorage(){
  localStorage.setItem('transactions',JSON.stringify(transactions));
}

//remove id
function removeTransaction(id){
   transactions = transactions.filter(item => item.id!== id)
   updateLocalStorage();
   init()
}
function init(){
    list.innerHTML = ''
    transactions.forEach(addListToDom)
    updateValue()
}

init()

form.addEventListener('submit',addTransaction)