// let request = new XMLHttpRequest();
//   request.open("GET", "https://jsonplaceholder.typicode.com/users");
//   request.send();
//   request.onload = () => {
//       console.log(request);
//       if (request.status === 200) {
//           renderTable(JSON.parse(request.response))
//       } else {
//           console.log(`error ${request.status} ${request.statusText}`);
//       }
// }


function getData(url, cb) {
    let xhr = new XMLHttpRequest()
    xhr.onload = function () {
        if (xhr.status === 200) {
            return cb(JSON.parse(xhr.responseText))
        }
    }
    xhr.open("GET", url)
    xhr.send()
}

const data = getData("https://jsonplaceholder.typicode.com/users", function (data) {
    renderTable(data)
})


function renderTable(data) {
    let table = document.getElementById('table')

    for (let i = 0; i < data.length; i++) {
        let row = `<tr>
				<td>${data[i].id}</td>
				<td>${data[i].name}</td>
				<td>${data[i].email}</td>
				<td>${data[i].username}</td>
				<td>${data[i].address.street}, ${data[i].address.suite}, ${data[i].address.city}</td>
				<td>${data[i].company.name}</td>
				</tr>`
        table.innerHTML += row
    }
}
// console.log(data)