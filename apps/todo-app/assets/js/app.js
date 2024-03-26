// Elementos HTML
const userSelect = document.getElementById('select-users');
const userContainer = document.getElementById('user-container');
const taskContainer = document.getElementById('task-container');
const btnSearchTask = document.getElementById('btn');

// Codígo nesesario para mostrar información
document.addEventListener('DOMContentLoaded', () => {
  getAllUsers()
    .then(allUsers => {
      let template = "";
      const firstUser = allUsers[0];
      for(let i = 0; i < allUsers.length; i++) {
        template += `
          <option value="${allUsers[i].id}" >${allUsers[i].firstname}</option>
        `;
      }

      userSelect.innerHTML = template;
      userContainer.innerHTML = `
        <h3>Informacion del usuario seleccionado</h3>
        <ul>
          <li>Nombre completo: ${firstUser.firstname} ${firstUser.lastname}</li>
          <li>Email: ${firstUser.email}</li>
        </ul>
      `;
    });
});

userSelect.addEventListener('change', (e) => {
  const id = parseInt(e.target.value);
  
  getAllUsers()
    .then(allUsers => {
      const ul = document.createElement('ul');
      for (let i = 0; i<allUsers.length;i++) {
        if (id === allUsers[i].id) {
          const liNombre = document.createElement('li');
          const liCorreo = document.createElement('li');

          liNombre.innerText = `${allUsers[i].firstname} ${allUsers[i].lastname}`;
          liCorreo.innerText = allUsers[i].email;

          ul.appendChild(liNombre);
          ul.appendChild(liCorreo);

          break;
        }
      }

      const h3 = document.createElement('h3');
      h3.innerText = "Informacion del usuario seleccionado";

      userContainer.innerHTML = "";
      userContainer.appendChild(h3);
      userContainer.appendChild(ul);
    });
});

btnSearchTask.addEventListener('click', () => {
  const id = parseInt(userSelect.value);

  getAllTasks()
    .then(allTasks => {
      let template = "";

      for (let i = 0; i< allTasks.length; i++) {
        if (id === allTasks[i].userId) {
          let isChecked = "";

          if (allTasks[i].completed) {
            isChecked = "checked";
          }

          template += `
            <li>
              <span>${allTasks[i].title}</span>
              <input type="checkbox" ${isChecked}>
            </li>
          `;
        }
      }

      taskContainer.innerHTML = `
        <h3>Lista de tareas del usuario</h3>
        <ul>
          ${template}
        </ul>
      `;
    });
});

// Fin de codígo

// Funciones
/**
 * Optiene una lista de todos los usuarios que pueden existir
 * @returns {Promise<User[]>}
 */
function getAllUsers() {
  return fetch('http://localhost:5000/connection.php')
    .then(resp => resp.json());
}

/**
 * Optiene una lista de todas las tareas que hay de todos los usuarios
 * @returns {Promise<Task[]>}
 */
function getAllTasks() {
  return fetch('/data/tareas.json')
    .then(resp => resp.json());
}

/**
 * @typedef User Definición de un usuario
 * @property {number} id Identificador unico del usuario
 * @property {string} firstname Primer nombre del usuario
 * @property {string} lastname Apellido del usuario
 * @property {string} email Correo electronico del usuario
  */

/**
 * @typedef Task Definición de una tarea de usuario
 * @property {number} id Identificador unico de la tarea
 * @property {number} userId IDentificador del uaurio a quien corresponde la tarea
 * @property {string} title Titulo de la tarea
 * @property {boolean} completed Estado de la tarea si esta completada o no
 */