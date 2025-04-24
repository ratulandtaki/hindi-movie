// script.js
document.addEventListener('DOMContentLoaded', () => {
  let timeLeft = 10;
  const countdown = document.getElementById("countdown");
  const buttons = document.getElementById("buttons");

  const timer = setInterval(() => {
    timeLeft--;
    countdown.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      countdown.style.display = "none";
      buttons.style.display = "flex";
    }
  }, 1000);
});
