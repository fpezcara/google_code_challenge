const searchButton = document.querySelector("#submit");
const luckyButton = document.querySelector("#lucky");
const form = document.querySelector("form");

searchButton.addEventListener("click", results);
luckyButton.addEventListener("click", luckyResults);
form.addEventListener("submit", enterForm);

function enterForm(e){
  e.preventDefault()
  results()
}

function results() {
  const input = search.value.trim();
  const option = "results";
  if (/^\s*$/.test(input) != true){
    fetchItems(input, option)
  }  
}

function luckyResults() {
  const input = search.value.trim();
  const option = "lucky";
  if (/^\s*$/.test(input) != true){
    fetchItems(input, option)
  }
}

function fetchItems(input, option) {
  fetch(`http://localhost:3000/home/${input}`)
    .then((resp) => resp.json())
    .then((result) => {
      const mainList = document.querySelector("#resultsList");
      mainList.textContent = "";
      if (option == "results") {
        for (let i = 0; i < result.length; i++) {
          const newList = document.createElement("p");
          newList.textContent = result[i];
          mainList.append(newList);
        }
      } else if (option == "lucky") {
        const newList = document.createElement("p");
        const randomNumber = Math.floor(Math.random() * result.length);
        newList.textContent = result[randomNumber];
        mainList.append(newList);
      }
    });
}
function firstRun() {
  const input = sessionStorage.getItem("input");
  search.value = input;
  option = sessionStorage.getItem("option");
  if (option == "results") {
    results()
  } else if (option == "lucky") {
    luckyResults()
  }
}

firstRun()
