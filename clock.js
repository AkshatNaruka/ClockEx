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