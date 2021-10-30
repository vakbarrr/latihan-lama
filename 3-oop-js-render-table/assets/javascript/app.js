class Table {
  constructor(init) {
    this.init = init
  }

  createTableHeader(data) {
    let tagOpen = "<thead><tr>"
    let tagCloses = "</tr></thead>"
    data.forEach((data) => {
      tagOpen += `<th>${data}</th>`
    })

    return tagOpen + tagCloses
  }

  createTableBody(data) {
    let tagOpen = "<tbody>"
    let tagCloses = "</tbody>"

    data.forEach((data) => {
      tagOpen += `
          <tr>
            <td>${data[0]}</td>
            <td>${data[1]}</td>
            <td>${data[2]}</td>
          </tr>
        `
    })

    return tagOpen + tagCloses
  }

  render(element) {
    let table =
      "<table class='table table-hover'>" +
      this.createTableHeader(this.init.columns) +
      this.createTableBody(this.init.data) +
      "</table>"
    element.innerHTML = table
  }
}

function searchDatatable() {
  
  let input, filter, table, tr, td, result;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  
  table = document.getElementById("table2");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      result = td.textContent || td.innerText;
      if (result.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

const table = new Table({
  columns: ["Name", "Age", "Birthday"],
  data: [
    ["Gian", "20", "11/10/2000"],
    ["testing", "22", "11/10/2000"],
    ["Aku", "30", "11/10/2000"],
    ["kita", "30", "11/10/2000"],
    ["dia", "30", "11/10/2000"],
    ["mereka", "30", "11/10/2000"],
  ]
})
const app = document.getElementById("table")
table.render(app)

const table2 = document.getElementById("table2")
table.render(table2)

const table3 = document.getElementById("table3")
table.render(table3)
