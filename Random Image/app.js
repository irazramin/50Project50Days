const imgContainer = document.querySelector('.img-container');
const IMG_URL = 'https://source.unsplash.com/random/'

const row = 10;

for (let i = 0; i <row*3; i++) {
    const img = document.createElement('img');
    img.src = `${IMG_URL}${getRandomSize()}`
    imgContainer.appendChild(img)
}

function getRandomSize() {
    return `${getRandomNumber()}x${getRandomNumber()}`
}


function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 300
}