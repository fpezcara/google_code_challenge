const form = document.querySelector('form')

form.addEventListener('submit', results)

function results(e) {
  e.preventDefault()
  let input = e.target.search.value
  fetch(`http://localhost:3000/home/${input}`)
    .then(resp => resp.text())
    .then(result => document.querySelector("footer").innerHTML = result)
}
