class Table {
  constructor(init) {
    this.init = init
  }

  createTableHeader(data) {
    let tagOpen = "<thead><tr>"
    let tagCloses = "</tr></thead>"
    data.forEach((d) => {
      tagOpen += `<th>${d}</th>`
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
 
export {Table}