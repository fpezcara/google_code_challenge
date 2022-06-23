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
  const input = search.value;
  const option = "results";
  sessionStorage.setItem("option", option);

  if (document.title == "results") {
    fetch(`http://localhost:3000/home/${input}`)
      .then((resp) => resp.json())
      .then((result) => {
        const mainList = document.querySelector("#resultsList");
        mainList.textContent = "";
        for (let i = 0; i < result.length; i++) {
          const newList = document.createElement("p");
          newList.textContent = result[i];
          mainList.append(newList);
        }
      });
  } else {
    sessionStorage.setItem("input", input);
    window.location.href = "resultspage.html";
  }
}

function luckyResults() {
  const input = search.value;
  const option = "lucky";
  sessionStorage.setItem("option", option);
  if (document.title == "results") {
    fetch(`http://localhost:3000/home/${input}`)
      .then((resp) => resp.json())
      .then((result) => {
        const mainList = document.querySelector("#resultsList");
        mainList.textContent = "";
        const newList = document.createElement("p");
        randomItem = Math.floor(Math.random() * result.length);
        newList.textContent = result[randomItem];
        mainList.append(newList);
      });
  } else {
    sessionStorage.setItem("input", input);
    window.location.href = "resultspage.html";
  }
}

if (document.title == "results") {
  const input = sessionStorage.getItem("input");
  search.value = input;
  fetch(`http://localhost:3000/home/${input}`)
    .then((resp) => resp.json())
    .then((result) => {
      const mainList = document.querySelector("#resultsList");
      option = sessionStorage.getItem("option");
      if (option == "results") {
        for (let i = 0; i < result.length; i++) {
          const newList = document.createElement("p");
          newList.textContent = result[i];
          mainList.append(newList);
        }
      } else if (option == "lucky") {
        const newList = document.createElement("p");
        randomItem = Math.floor(Math.random() * result.length);
        newList.textContent = result[randomItem];
        mainList.append(newList);
      }
    });
}
