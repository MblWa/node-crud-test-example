// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *client
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return await response.json(); // parses JSON response into native JavaScript objects
// }

// async function deleteData(url = '', id) {
//   // Default options are marked with *
//   const response = await fetch(url + id, {
//     method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *client
//   });
//   return await response.json(); // parses JSON response into native JavaScript objects
// }

// async function putData(url = '', id, data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url + id, {
//     method: 'PUT', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *client
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return await response.json(); // parses JSON response into native JavaScript objects
// }


// postData('http://localhost:8001/api/users', { name: 'Ass', age: 42 })
//   .then((data) => {
//     console.log(data); // JSON data parsed by `response.json()` call
//   });

// deleteData('http://localhost:8001/api/users/', "4ce2cd85-2235-4bf8-bdb5-34ec9afc48a5")
//   .then((data) => {
//     console.log(data); // JSON data parsed by `response.json()` call
//   });

// putData('http://localhost:8001/api/users/', '5afb655e-7c06-49db-a442-e76933f17c8e', { name: 'test', age: 1 })
  // .then((data) => {
  //   console.log(data); // JSON data parsed by `response.json()` call
  // });