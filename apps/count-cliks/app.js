let clicks = 0;
const containerClicks = document.querySelector('#clicks');
const [increment, decrement, reset] = document.querySelectorAll('button');

document.addEventListener('DOMContentLoaded', () => {
  increment.onclick = () => {
    clicks++;
    containerClicks.innerHTML = clicks;
  };

  decrement.onclick = () => {
    clicks--;
    containerClicks.innerHTML = clicks;
  };

  reset.onclick = () => {
    clicks = 0;
    containerClicks.innerHTML = 0;
  };
  
});