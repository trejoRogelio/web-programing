const btn = document.getElementById('btn');
const container = document.getElementById('container-users');

btn.addEventListener('click', () => {
  container.innerHTML = "";

  getUsers((users) => {
    const ul = document.createElement('ul');

    for (let i = 0; i < users.length; i++) {
      const li = document.createElement('li');
      const btnli = document.createElement('button');

      btnli.innerText = "Get User Info!";
      li.innerText = users[i].name;
      li.appendChild(btnli);

      ul.appendChild(li);

      btnli.addEventListener('click', () => {
        const id = users[i].id;
        
        getInfo(id, (info) => {
          const ol = document.createElement('ol');
          ol.innerHTML = `
            <li> ${info.fullname} </li>
            <li> ${info.birthbay} </li>
          `;

          li.appendChild(ol);
        });
      })
    }
    container.appendChild(ul)
  });
  
});


function getUsers(callback) {
  const time = (Math.floor(Math.random() * 2) + 1)  * 1000;

  setTimeout(() => {
    const users = [
      { id: 1, name: "Rogelio", years: 22 },
      { id: 2, name: "Saul", years: 30 }
    ];

    callback(users);
  }, time);
}

function getInfo(id, callback) {
const time = (Math.floor(Math.random() * 2) + 1)  * 1000;

  setTimeout(() => {
    const userInfo = [
      { id: 1, idUser: 2, fullname: "Saul Perez", birthbay: "1907-02-10" },
      { id: 2, idUser: 1, fullname: "Rogelio Trejo", birthbay: "2001-03-24" }
    ];

    const userFindInfo = userInfo.find(user => {
      return user.idUser === idappendChild(ul)
    })

    callback(userFindInfo);
  }, time);
}