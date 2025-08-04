console.log('Welcome to Sachin Playlist')

// Initializes the Variables
let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
// audioElement.play();

// Handle play/pause click


let songs = [
    {songName: "Attention", filePath: "./songs/1.mp3", coverPath: "./covers/1.jpg"},
    {songName: "s", filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg"},
    {songName: "a", filePath: "./songs/3.mp3", coverPath: "./covers/3.jpg"},
    {songName: "c", filePath: "./songs/4.mp3", coverPath: "./covers/4.jpg"},
    {songName: "h", filePath: "./songs/5.mp3", coverPath: "./covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "./songs/6.mp3", coverPath: "./covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "./songs/7.mp3", coverPath: "./covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "./songs/8.mp3", coverPath: "./covers/8.jpg"},
]
songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;
})




//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-solid','fa-circle-play')
        masterPlay.classList.add('fa-solid','fa-circle-pause')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-solid','fa-circle-pause');
        masterPlay.classList.add('fa-solid','fa-circle-play');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
        element.classList.remove('fa-solid','fa-circle-pause')
        element.classList.add('fa-solid','fa-circle-play')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click',(e) => {
            makeAllPlays();
        })
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-solid','fa-circle-play')
        e.target.classList.add('fa-solid','fa-circle-pause')
        audioElement.scr = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        element.classList.remove('fa-solid','fa-circle-play')
        element.classList.add('fa-solid','fa-circle-pause')
        })


document.getElementsById('next').addEventListener('click',() => {
    if(songIndex>=8){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }

    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    element.classList.remove('fa-solid','fa-circle-play')
        element.classList.add('fa-solid','fa-circle-pause')

})



document.getElementsById('previous').addEventListener('click',() => {
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex = -1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    element.classList.remove('fa-solid','fa-circle-play')
    element.classList.add('fa-solid','fa-circle-pause')



})