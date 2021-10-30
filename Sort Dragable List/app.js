const draggbleList = document.getElementById('draggble-list');
const check = document.getElementById('check-btn');

const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page',
];

// Store listitems
const listItems = [];

let dragStartIndex;

chechList();

function chechList() {
  [...richestPeople]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.setAttribute('data-index', index);
      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggble" draggable="true">
            <p class="person-name">${item}</p>
            <i class="fas fa-grip-lines"></i>
        </div>
    `;

      listItems.push(listItem);
      draggbleList.appendChild(listItem);
    });
  addEventListeners();
}

function dragStart() {
  dragStartIndex = +this.closest('li').getAttribute('data-index');
}
function dragEnter() {
  this.classList.add('over');
}
function dragLeave() {
  this.classList.remove('over');
}
function dragOver(e) {
  e.preventDefault();
}
function drapDrop() {
  const dragEndIndex = +this.getAttribute('data-index');
  swapIndex(dragStartIndex, dragEndIndex);
  this.classList.add('over');
}

function swapIndex(startIndex, endIndex) {
  const itemOne = listItems[startIndex].querySelector('.draggble');
  const itemTwo = listItems[endIndex].querySelector('.draggble');

  listItems[startIndex].appendChild(itemTwo);
  listItems[endIndex].appendChild(itemOne);
}

function checkOrder() {
  listItems.forEach((listItem, index) => {
    const personName = listItem.querySelector('.draggble').innerText.trim();

    if (personName !== richestPeople[index]) {
      listItem.classList.add('wrong');
    } else {
      listItem.classList.remove('wrong');
      listItem.classList.add('right');
    }
  });
}
function addEventListeners() {
  const draggables = document.querySelectorAll('.draggble');
  const draggableListItems = document.querySelectorAll('.draggble-list li');

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', dragStart);
  });
  draggableListItems.forEach((item) => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', drapDrop);
    item.addEventListener('dragleave', dragLeave);
    item.addEventListener('dragenter', dragEnter);
  });
}

check.addEventListener('click',checkOrder)