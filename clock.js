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


// Load tasks from local storage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    const taskElement = createTaskElement(task);
    document.getElementById('taskList').appendChild(taskElement);
  });
}

// Save tasks to local storage
function saveTasks() {
  const tasks = Array.from(document.querySelectorAll('#taskList li')).map(taskElement => taskElement.textContent);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Create a task element
function createTaskElement(task) {
  const taskElement = document.createElement('li');
  taskElement.textContent = task;
  taskElement.addEventListener('click', function() {
    this.parentNode.removeChild(this);
    saveTasks();
  });
  return taskElement;
}

// Add task when Enter key is pressed
document.getElementById('taskInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const task = this.value;
    const taskElement = createTaskElement(task);
    document.getElementById('taskList').appendChild(taskElement);
    this.value = '';
    saveTasks();
  }
});

// Load tasks on page load
loadTasks();
function showLocalQuote() {
  const localQuotes = [
    {
      content: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      content: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      author: "Albert Schweitzer"
    },
    {
      content: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      content: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      content: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein"
    }
  ];

  const randomIndex = Math.floor(Math.random() * localQuotes.length);
  const quote = localQuotes[randomIndex];
  document.getElementById('quote').textContent = quote.content + " - " + quote.author;
}

if (navigator.onLine) {
  fetchQuote();
} else {
  showLocalQuote();
}


function fetchQuote() {
  fetch('https://api.quotable.io/quotes/random?tags=Wisdom') 
    .then(response => response.json())
    .then(data => {
      console.log(data);  // Log the data to the console
      document.getElementById('quote').textContent = data[0].content + " - " + data[0].author;
    })
    .catch(error => console.error('Error:', error));
}

fetchQuote();

// Play music when the page loads
window.addEventListener('load', function() {
  const audioPlayer = document.getElementById('audioPlayer');
  audioPlayer.src = 'url here'; // Provide the direct link to your music file here
  audioPlayer.play();
});

// Play/pause the music
const playPauseButton = document.getElementById('disc');
const audioPlayer = document.getElementById('audioPlayer');

playPauseButton.addEventListener('click', function() {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
});


