console.log("welcome ");
let SongIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName');
let mybar = document.getElementById('mybar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    { songName: "shinchan", filepath: "song/1.mp3", coverPath: "shinchan.jpg" },
    { songName: "Zindagi Sawar du", filepath: "song/2.mp3", coverPath: "doremon.jpg" },
    { songName: "Jeena Ka shi dhang", filepath: "song/3.mp3", coverPath: "doremon.jpg" },
    { songName: "Ben10 Starting Song", filepath: "song/4.mp3", coverPath: "ben.jpg" },
    { songName: "Ninja Hattori Starting Song", filepath: "song/5.mp3", coverPath: "hattori.jpg" },
    { songName: "Ninja Hattori Ending Song", filepath: "song/6.mp3", coverPath: "hattori.jpg" },
    { songName: "Perman Starting Song", filepath: "song/7.mp3", coverPath: "perman.png" },
    { songName: "Perman Ending Song", filepath: "song/8.mp3", coverPath: "perman.png" },
    { songName: "Kochikame Song", filepath: "song/9.mp3", coverPath: "kochi.jpg" },
    { songName: "The return of the hanuman Song", filepath: "song/10.mp3", coverPath: "return.jpg" },
]
songitems.forEach((element, i) => {
    // console.log(element ,i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

})
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    // console.log(progress);
    mybar.value = progress;

})
mybar.addEventListener('change', () => {
    audioElement.currentTime = mybar.value * audioElement.duration / 100;
})
const makeAllplays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        makeAllplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex + 1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})