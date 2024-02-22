// Primera manera de recuparar un elemento HTML
const containerClicks = document.getElementById('container-clicks');
const btnIncrement = document.querySelector('.btn-primary');
const btnDecrement = document.querySelector('.btn-secondary');
const btnReset = document.querySelector('.btn-reset');
let conter = 0;

btnIncrement.onclick = function() {
  conter++;
  containerClicks.innerText = conter;
}

btnDecrement.onclick = () => {
  conter--;
  containerClicks.innerText = conter;
};

btnReset.onclick = () => {
  conter = 0
  containerClicks.innerText = conter;
};