console.log("This is working!!!!");

function sum(a, b) {
  return a + b;
}

function suma2numeros(callback) {
  const resultadoSuma = sum(1,2);

  // REalice anteriormente varias cosas mas!!! ...

  callback(resultadoSuma);
}

function callback(valor) {
  console.log(valor);
}

suma2numeros(function(valor) {
  console.log(valor);
});

const button = document.getElementById('btn');
const container = document.getElementById('container');

button.addEventListener('click', function() {
  getUsers()
    .then(function(json) {
      const ul = document.createElement('ul');

      for (let i = 0; i < json.usuarios.length; i++) {
        const li = document.createElement('li');
        li.innerText  = json.usuarios[i].name;
        ul.appendChild(li);
      }

      container.appendChild(ul);
      console.log(json.usuarios);

    });
});

function getUsers() {
  return fetch("http://127.0.0.1:5500/info.json")
    .then(function(response) {
      return response.json();
    });
}

