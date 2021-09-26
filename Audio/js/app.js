const sounds = ['air','bird','jungle','ocan','rain','water'];

sounds.forEach(sound =>{
    const button = document.createElement('button');
    button.classList.add('buttons');

    button.innerText = sound;
    button.addEventListener('click',() =>{
        stopSong();
        document.getElementById(sound).play();
    });
   document.getElementById('btn').appendChild(button);

});

let stopSong = function(){
    sounds.forEach(sound =>{
        let song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}