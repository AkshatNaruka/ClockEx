function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

document.getElementById('toggleTheme').addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
  const icon = document.querySelector('#toggleTheme i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});

let timeLeft = 25 * 60; // 25 minutes in seconds
let isWorking = true;
let timerInterval;

function updateTimer() {
  // Convert the time left to minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Update the timer display
  document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  // Decrease the time left
  timeLeft--;

  // If the time left is 0, switch between working and break time
  if (timeLeft < 0) {
    isWorking = !isWorking;
    timeLeft = isWorking ? 25 * 60 : 5 * 60;
  }
}

document.getElementById('startPomodoro').addEventListener('click', function() {
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 1000);
  }
});

document.getElementById('pausePomodoro').addEventListener('click', function() {
  clearInterval(timerInterval);
  timerInterval = null;
});

document.getElementById('taskInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const task = document.createElement('li');
    task.textContent = this.value;
    task.addEventListener('click', function() {
      this.parentNode.removeChild(this);
    });
    document.getElementById('taskList').appendChild(task);
    this.value = '';
  }
});