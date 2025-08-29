// fetch('https://jsonplaceholder.typicode.com/todos/')
//       .then(response => response.json())
//       .then(json => {
//         // console.log(json)
//         json.map((item) => {
//             if(item.id >10) {
//                 return;
//             }
//             console.log(item);
//         })
//       })

async function Apicalled() {
    const apiCalling = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(apiCalling);
    const response = await apiCalling.text();
    console.log(response);
}

Apicalled();

// When you use fetch(url), it defaults to GET.
// const apiCalling = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
//     method: 'GET',
// });