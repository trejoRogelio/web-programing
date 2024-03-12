function getUsers(callback) {
  setTimeout(() => {
    const users = [
      { name: "rogelio", years: 22 },
      { name: "Luis", years: 30 }
    ];

    callback(users);
  }, 2000);
}

function getUsersWithPrimise() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [
        { name: "rogelio", years: 22 },
        { name: "Luis", years: 30 }
      ];

      resolve(users);
    }, 2000);
  });

  return promise;
}

function getInfo(name ,callback) {
  setTimeout(() => {
    let error = null;
    const saludo = "Hola " + name + ", Como estas????";

    if (name === "rogelio") {
      error = new Error("Esta mal la persona!!!");
    }

    callback(saludo, error);
  } ,5000);
}

function getInfoWithPromise(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const saludo = "Hola " + name + ", Como estas????";

      if (name === "rogelio") {
        reject(new Error("Esta mal la persona!!!"));
      } else {
        resolve(saludo);
      }
    } ,5000);
  });
}

// getUsers((users) => {
//   for (let i = 0; i < users.length; i++) {
//     getInfo(users[i].name, (saludo, error) => {
//       if (error !== null) {
//         console.log("Existe un error: ", error);
//       } else {
//         console.log(saludo);
//       }
//     });
//   }
// });

// getUsersWithPrimise()
//   .then((users) => {
//     let newResponses = [];
//     for (let i = 0; i < users.length; i++){
//       newResponses.push(getInfoWithPromise(users[i].name))
//     }

//     console.log(newResponses)

//     return Promise.allSettled(newResponses);
//   })
//   .then((info) => {
//     console.log(info);
//   })
//   .catch((error) => {
//     console.log("error en la promesa: ", error)
//   });

  async function main() {
    let users =  await getUsersWithPrimise();

    for (let i = 0; i < users.length; i++) {
      try {
        let saludo = await getInfoWithPromise(users[i].name);
        console.log(saludo);
      } catch (error) {
        console.log(error);
      }
    }
  }

  main();

// ES6 -> Promise;

