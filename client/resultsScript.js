const searchButton = document.querySelector('#submit')
searchButton.addEventListener('click', results)
const input = require("./script.js");



search.value = input

function results() {
  input = search.value
  console.log(search.value)
  fetch(`http://localhost:3000/home/${input}`)
    .then(resp => resp.json())
    .then(result => {
        const mainList = document.querySelector("#resultsList")
        mainList.innerHTML = ""
        for (let i=0; i<result.length; i++){
            const newList = document.createElement("li")
            newList.textContent = result[i]
            mainList.append(newList)
        }
    })
}
