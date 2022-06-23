const searchButton = document.querySelector("#submit");
const luckyButton = document.querySelector("#lucky");
const form = document.querySelector("form");

searchButton.addEventListener("click", () => {
  const option = "normal";
  results(option)
});
luckyButton.addEventListener("click", () => {
  const option = "lucky";
  results(option)
});
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const option = "normal";
  results(option)
});

function results(option) {
  const input = search.value.trim();
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
      if (option == "normal") {
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
  fetchItems(input, option)
}

firstRun()
