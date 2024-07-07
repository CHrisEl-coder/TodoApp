const date = "2024-07-06T18:19:24.925+00:00"

let t_index = date.indexOf("T")

let dot_index = date.indexOf(".")

let time = date.slice(t_index + 1, dot_index)
console.log(time)