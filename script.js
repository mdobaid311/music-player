const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Music
const songs = [
  {
    name: "jacinto-1",
    displayName: "Electric Chill Machine",
    artist: "Jacinto Design",
  },
  {
    name: "jacinto-2",
    displayName: "Seven Nation Army (Remix)",
    artist: "Jacinto Design",
  },
  {
    name: "jacinto-3",
    displayName: "Goodnight, Disco Queen",
    artist: "Jacinto Design",
  },
  {
    name: "metric-1",
    displayName: "Front Row (Remix)",
    artist: "Metric/Jacinto Design",
  },
];

// Check if Playing
let isPlaying = false;

// Play
function playSong() {
  music.play();
  isPlaying = true;
  playBtn.setAttribute("title", "pause");
  playBtn.classList.replace("fa-play", "fa-pause");
}

function pauseMusic() {
  isPlaying = false;
  music.pause();
  playBtn.setAttribute("title", "play");

  playBtn.classList.replace("fa-pause", "fa-play");
}

playBtn.addEventListener("click", () =>
  isPlaying ? pauseMusic() : playSong()
);

// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// Current song
let songIndex = 0;

// On load - select first song
loadSong(songs[songIndex]);

function prevSong() {
  songIndex--;
  loadSong(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex++;
  loadSong(songs[songIndex]);
  playSong();
}

nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);
