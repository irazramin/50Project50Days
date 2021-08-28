const jokeBtn = document.querySelector('.btn');
const joke = document.querySelector('.joke');


jokeBtn.addEventListener('click', getJokeApi)

getJokeApi();
async function getJokeApi(){
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
       
    const res = await fetch("https://icanhazdadjoke.com", config);

    const data = await res.json();
  
    joke.innerHTML = data.joke;

    // fetch('https://icanhazdadjoke.com',config)
    // .then((req) => req.json())
    // .then((data) => {
    //     joke.innerHTML = data.joke;
    // })
}