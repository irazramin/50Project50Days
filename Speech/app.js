const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const textArea = document.getElementById('textarea');
const readText = document.getElementById('read-text');
const voicesSelect = document.getElementById('voices');
const main = document.querySelector('main');

const data = [
  {
    image: '/Speech/img/drink.jpg',
    text: "I'm Thirsty",
  },
  {
    image: '/Speech/img/food.jpg',
    text: "I'm Hungry",
  },
  {
    image: '/Speech/img/tired.jpg',
    text: "I'm Tired",
  },
  {
    image: '/Speech/img/hurt.jpg',
    text: "I'm Hurt",
  },
  {
    image: '/Speech/img/happy.jpg',
    text: "I'm Happy",
  },
  {
    image: '/Speech/img/angry.jpg',
    text: "I'm Angry",
  },
  {
    image: '/Speech/img/sad.jpg',
    text: "I'm Sad",
  },
  {
    image: '/Speech/img/scared.jpg',
    text: "I'm Scared",
  },
  {
    image: '/Speech/img/outside.jpg',
    text: 'I Want To Go Outside',
  },
  {
    image: '/Speech/img/home.jpg',
    text: 'I Want To Go Home',
  },
  {
    image: '/Speech/img/school.jpg',
    text: 'I Want To Go To School',
  },
  {
    image: '/Speech/img/grandma.jpg',
    text: 'I Want To Go To Grandmas',
  },
];

data.forEach(createBox);

function createBox(item) {
  const boxEl = document.createElement('div');
  boxEl.classList.add('box');

  const { image, text } = item;

  boxEl.innerHTML = `
        <img src="${image}" alt="${text}" />
        <p class"text-info">${text}</p>
    `;

  boxEl.addEventListener('click', () => {
    setSpeakMessage(text);
    speakText();

    boxEl.classList.add('active');
    setTimeout(() => boxEl.classList.remove('active'), 800);
  });
  main.appendChild(boxEl);
}

const message = new SpeechSynthesisUtterance();

function setSpeakMessage(text) {
  message.text = text;
}

function speakText() {
  speechSynthesis.speak(message);
}
let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach((voice) => {
    const option = document.createElement('option');
    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;
    voicesSelect.appendChild(option);
  });
}

function setVoice(e) {
  message.voice = voices.find((item) => item.name === e.target.value);
}

voicesSelect.addEventListener('change', setVoice);

speechSynthesis.addEventListener('voiceschanged', getVoices);

close.addEventListener('click', () =>
  document.getElementById('text-box').classList.remove('show')
);

toggle.addEventListener('click', () =>
  document.getElementById('text-box').classList.toggle('show')
);

readText.addEventListener('click', () => {
  setSpeakMessage(textArea.value);
  speakText();
});

getVoices();
