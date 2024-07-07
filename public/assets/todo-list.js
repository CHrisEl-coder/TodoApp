const btn = document.querySelector(".button");
const delBtn = document.querySelectorAll(".delete");

const form = document.querySelector("form")

const handleAdd = (e) => {
 e.preventDefault();

 if (form.classList[0] === "hide") {
      form.classList.remove("hide");
      form.classList.add("show");
 }else {
    form.classList.remove("show");
    form.classList.add("hide")
 }
}

const handleDelete = (e) => {
  const id = e.target.dataset.doc

  const endUrl = `/todo/${id}`

  fetch(endUrl, {
    method: "DELETE"
  })
    .then((response) => {
      response.json()
         .then(data => {
          window.location.href = data.redirect
         })
    })
    .catch(err => {
      console.log(err)
    })
}

delBtn.forEach((del)=> {
  del.addEventListener('click', handleDelete)
})

btn.addEventListener('click', handleAdd)