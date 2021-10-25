const musicContainer = document.getElementById('music-container');
const title = document.querySelector('.title');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const cover = document.getElementById('cover');
const audio = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playBtn = document.getElementById('play');

const songName = ['hey','summer','ukulele'];
let songIndex = 0;

loadSong(songName[songIndex]);

//change progress
function changeProgress(e){
    const width = this.clientWidth;
    const clientX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clientX / width) * duration;
    console.log(clientX)
}


// update progres
function updateProgress(e){
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) *100
    progress.style.width = `${progressPercent}%`
}

//prev song
function prevSong(){
    songIndex--;

    if(songIndex < 0){
        songIndex = songName.length -1;
    }
    loadSong(songName[songIndex])
    playSong()
}
//next song
function nextSong(){
    songIndex++;

    if(songIndex > songName.length - 1){
        songIndex = 0;
    }
    loadSong(songName[songIndex])
    playSong()
}

// play song
function playSong(){
    musicContainer.classList.add('play');

    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}
//pause song
function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

//load song
function loadSong(song){
    title.innerText = song;
    audio.src = `/Music Player/music/${song}.mp3`
    cover.src = `/Music Player/images/${song}.jpg`
}
// add event listener to play button
playBtn.addEventListener('click', ()=>{
    const isPlaying = musicContainer.classList.contains('play');

    if(isPlaying){
        pauseSong();
    }else{
        playSong();
    }
})

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate',updateProgress);
progressContainer.addEventListener('click',changeProgress);

audio.addEventListener('ended',nextSong)