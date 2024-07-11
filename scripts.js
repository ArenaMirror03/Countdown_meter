// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    let timer;
    let remainingTime = 0; // Initial countdown time in seconds
    const timerDisplay = document.getElementById('timer-display');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');
    const setTimerButton = document.getElementById('set-timer');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    function formatTime(seconds) {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${secs}`;
    }

    function updateDisplay() {
        timerDisplay.textContent = formatTime(remainingTime);
    }

    function startTimer() {
        if (!timer) {
            timer = setInterval(() => {
                if (remainingTime > 0) {
                    remainingTime--;
                    updateDisplay();
                } else {
                    clearInterval(timer);
                    timer = null;
                }
            }, 1000);
        }
    }

    function stopTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    function resetTimer() {
        stopTimer();
        remainingTime = 0;
        updateDisplay();
    }

    function setTimer() {
        const hours = parseInt(hoursInput.value) || 0;
        const minutes = parseInt(minutesInput.value) || 0;
        const seconds = parseInt(secondsInput.value) || 0;
        remainingTime = hours * 3600 + minutes * 60 + seconds;
        updateDisplay();
    }

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
    setTimerButton.addEventListener('click', setTimer);

    updateDisplay();
});
