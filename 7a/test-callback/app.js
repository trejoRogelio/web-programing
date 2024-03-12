// function sum(a, b) {
//   return a + b;
// }

// function algo(callback) {
//   const sum1 = sum(5, 6);

//   /// PAso mucho tiempo!!!!
//   callback(sum1);
// }

// function callback(valor) {
//   console.log(valor);
// }

// algo(callback);

// algo(function(valor) {
//   console.log(valor);
// });



// function nombre() {
//   console.log("hola!!!")
// }

// algo(nombre)

// 

// algo(() => {

// });

const btn = document.getElementById('btn');
const title = document.getElementById('title');
const input = document.getElementById('textInput');
const container = document.getElementById('container');

window.addEventListener("load", () => {
  // alert("La ventana termino de cargar!!!!");
})

btn.addEventListener('click', function() {
  // document.getElementById('titulo').innerHTML = "Cambio el Titulo!";
  // title.innerText = "Cambio el titulo";

  const inputValue = input.value;
  container.innerHTML = inputValue;


});

btn.addEventListener('dblclick', () => {
  fetch('/info.json')
    .then((response) => {
      console.log(response)

      return response.json();
    })
    .then((text) => {
      console.log(text)
    })
})