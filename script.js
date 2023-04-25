console.log("hello world");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let mastersongName = document.getElementById('mastersongName');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songname: "Mood ft. Iann Dior", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songname: "Beach Fossils - Down the Line", filePath: "songs/2.mp3", coverPath: "covers/1.jpg" },
    { songname: "Billie Eilish - bad guy", filePath: "songs/3.mp3", coverPath: "covers/1.jpg" },
    { songname: "Coldplay -Let Somebody Go", filePath: "songs/4.mp3", coverPath: "covers/1.jpg" },
    { songname: "Blood Like Lemonade ", filePath: "songs/5.mp3", coverPath: "covers/1.jpg" },
    { songname: "Lover buoy ", filePath: "songs/6.mp3", coverPath: "covers/1.jpg" },
]


//ami chai player er display te gaan er naam gula uporer ei 'songs' theke ashuk
//ami chai player er display te gaan er cover gula , "cover" folder er 1.jpg use hok
songItem.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songname;  //songItem er jei songName classchilo shetar inner text 'songs' er 'songname' gula hok
})
// audioelement.play();

// handle play/pause click
masterPlay.addEventListener('click', () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
    //click korle jodi gaan paused thake or gaan er currenttime 0 thake then gaan on hobe. ulta hoile pause hobe
    //gaan on hoile play icon change hoye pause icon hobe
    //and gif  o on hobe equalizer er
    //gaan off hoile pause icon change hoye play icon hobe
    //
})

// listem to events
audioElement.addEventListener('timeupdate', () => {
    // progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    //progess - e shudhu int value jaito kototuku pass korse shetar arki
    progress = ((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
})

//ami chai progress bar click/drag kore kore gaan shubo
myprogressbar.addEventListener('change', () => {
    // audioElement.currentTime = myprogressbar.value; 
    //uporer ta bhul hobe karon progress er value parcentage-e
    //etake normal korte hobe
    audioElement.currentTime = (myprogressbar.value * audioElement.duration) / 100;

})

//ami chai list theke jekono gaan play korte

const makeAllPlays = () => {

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {


        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {

        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        // mastersongName.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        mastersongName.innerText = songs[songIndex].songname;
    })
})

// previous forward button click korle kaaj korbe

document.getElementById('next').addEventListener('click', () => {

    if (songIndex > 5) {
        songIndex = 0;
    } else {
        songIndex = songIndex + 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    // mastersongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    mastersongName.innerText = songs[songIndex].songname;
})

document.getElementById('previous').addEventListener('click', () => {


    if (songIndex < 0) {
        songIndex = 5;
    } else {
        songIndex = songIndex - 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;

    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    mastersongName.innerText = songs[songIndex].songname;
})