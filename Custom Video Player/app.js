const video = document.getElementById('video');
const progress = document.getElementById('progress');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const timestamp = document.getElementById('timestamp');

video.addEventListener('click',toogleVideoPausePlay);
video.addEventListener('play',updateIcon);
video.addEventListener('pause',updateIcon);
video.addEventListener('timeupdate',updateProgress);

play.addEventListener('click',toogleVideoPausePlay);
stop.addEventListener('click',stopVideo);
progress.addEventListener('change',changeTimeUpdate)



function toogleVideoPausePlay(){
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}

function updateIcon(){
    if(video.paused){
        play.innerHTML = `<i class="fas fa-play fa-2x"></i>`
    }else{
        play.innerHTML = `<i class="fas fa-pause fa-2x"></i>`
    }

}
function updateProgress(){
    progress.value = (video.currentTime / video.duration) * 100;
    
    //get min
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10){
        mins = '0' +String(mins)
    }
    //get secs
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10){
        secs = '0' +String(secs)
    }

    timestamp.innerHTML =   `${mins}:${secs}`
}

function changeTimeUpdate(){
    video.currentTime = (+progress.value * video.duration) / 100;
}

function stopVideo(){
    video.currentTime = 0;
    video.pause();
}