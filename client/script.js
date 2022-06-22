const searchButton = document.querySelector('#submit')
const luckyButton = document.querySelector('#lucky')

searchButton.addEventListener('click', results)
luckyButton.addEventListener('click', luckyResults)

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

// function luckyResults() {
//   input = search.value
//   fetch(`http://localhost:3000/home/${input}`)
//     .then(resp => resp.json())
//     .then(result => {
//         const mainList = document.querySelector("#resultsList")
//         mainList.innerHTML = ""
//         const newList = document.createElement("li")
//         randomItem = Math.floor(Math.random()*(result.length))
//         newList.textContent = result[randomItem]
//         mainList.append(newList)
//     })
// }


function luckyResults() {
  let input = search.value
  window.location.href="resultspage.html"
}

module.exports= {input};
