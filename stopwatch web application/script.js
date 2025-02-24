let minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let running = false;
let lapCounter = 1;

const startPauseButton = document.getElementById("start"); // Start button now acts as both Start & Pause
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const themeToggle = document.getElementById("theme-toggle");
const lapsList = document.getElementById("laps");

const minuteDisplay = document.getElementById("minutes");
const secondDisplay = document.getElementById("seconds");
const millisecondDisplay = document.getElementById("milliseconds");

function toggleTimer() {
    if (!running) {
        running = true;
        timer = setInterval(updateTime, 10);
        startPauseButton.textContent = "Pause"; // Change to Pause
    } else {
        running = false;
        clearInterval(timer);
        startPauseButton.textContent = "Start"; // Change back to Start
    }
}

function resetTimer() {
    running = false;
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    lapCounter = 1;
    updateDisplay();
    lapsList.innerHTML = ""; // Clear lap times

    startPauseButton.textContent = "Start"; // Reset button changes it back to Start
}

function updateTime() {
    milliseconds++;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    updateDisplay();
}

function updateDisplay() {
    minuteDisplay.textContent = minutes.toString().padStart(2, "0");
    secondDisplay.textContent = seconds.toString().padStart(2, "0");
    millisecondDisplay.textContent = milliseconds.toString().padStart(2, "0");
}

function recordLap() {
    if (running) {
        const lapTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
        const lapItem = document.createElement("li");
        lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
        lapsList.appendChild(lapItem);
        lapCounter++;
    }
}

// Dark/Light Mode Toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙 ";
    }
});

// Event listeners
startPauseButton.addEventListener("click", toggleTimer);
resetButton.addEventListener("click", resetTimer);
lapButton.addEventListener("click", recordLap);
