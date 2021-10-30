import {Table} from "./table.js"

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
const table1 = document.getElementById("table")
table.render(table1)

const table2 = document.getElementById("table2")
table.render(table2)