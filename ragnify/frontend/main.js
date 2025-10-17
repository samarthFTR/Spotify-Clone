// ===============================
// 🎚️ UI Tab Toggle Logic
// ===============================
const tabs = document.querySelectorAll(".tab-btn");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => {
      t.classList.remove("bg-green-500", "text-black", "border", "border-white");
      t.classList.add("bg-gray-800");
    });
    tab.classList.remove("bg-gray-800");
    if (tab.dataset.tab === "All") {
      tab.classList.add("bg-green-500", "text-black");
    } else if (tab.dataset.tab === "Music") {
      tab.classList.add("border", "border-white");
    } else {
      tab.classList.add("bg-gray-700");
    }
  });
});

// ===============================
// ▶️ Play / Pause Button in Header (Album Preview)
// ===============================
const playPauseBtn = document.getElementById("playPauseBtn");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");

if (playPauseBtn) {
  playPauseBtn.addEventListener("click", () => {
    playIcon.classList.toggle("hidden");
    pauseIcon.classList.toggle("hidden");
  });
}

// ===============================
// ⏪ ⏩ Arrow Buttons (Header Controls)
// ===============================
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (prevBtn) prevBtn.addEventListener("click", () => alert("Previous album"));
if (nextBtn) nextBtn.addEventListener("click", () => alert("Next album"));

// ===============================
// 🎵 Bottom Player Controls
// ===============================
const audio = document.getElementById("audio");
const playPause = document.getElementById("playPause");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const volume = document.getElementById("volume");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");

function playSong(songTitle, songArtist, songUrl, songCover) {
  title.textContent = songTitle;
  artist.textContent = songArtist;
  cover.src = songCover;
  audio.src = songUrl;
  audio.play();
  playPause.classList.replace("fa-play-circle", "fa-pause-circle");
}

audio.addEventListener("loadedmetadata", () => {
  durationEl.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${progressPercent}%`;
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

volume.addEventListener("input", e => {
  audio.volume = e.target.value;
});

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playPause.classList.replace("fa-play-circle", "fa-pause-circle");
  } else {
    audio.pause();
    playPause.classList.replace("fa-pause-circle", "fa-play-circle");
  }
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60) || 0;
  const secs = Math.floor(seconds % 60) || 0;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function prevSong() { alert("Previous song feature coming soon"); }
function nextSong() { alert("Next song feature coming soon"); }
