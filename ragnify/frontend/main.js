 // Tabs toggling
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

    // Play/pause toggle
    const playPauseBtn = document.getElementById("playPauseBtn");
    const playIcon = document.getElementById("playIcon");
    const pauseIcon = document.getElementById("pauseIcon");

    playPauseBtn.addEventListener("click", () => {
      playIcon.classList.toggle("hidden");
      pauseIcon.classList.toggle("hidden");
    });

    // Arrow buttons (prev/next) simple alert demo
    document.getElementById("prevBtn").addEventListener("click", () => alert("Previous album"));
    document.getElementById("nextBtn").addEventListener("click", () => alert("Next album"));