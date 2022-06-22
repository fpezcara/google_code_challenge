const searchButton = document.querySelector("#submit");
const luckyButton = document.querySelector("#lucky");

searchButton.addEventListener("click", results);
luckyButton.addEventListener("click", luckyResults);

function results() {
  const input = search.value;
  const option = "results";
  sessionStorage.setItem("option", option);

  if (document.title == "results") {
    fetch(`http://localhost:3000/home/${input}`)
      .then((resp) => resp.json())
      .then((result) => {
        const mainList = document.querySelector("#resultsList");
        mainList.innerHTML = "";
        for (let i = 0; i < result.length; i++) {
          const newList = document.createElement("li");
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
        mainList.innerHTML = "";
        const newList = document.createElement("li");
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
      mainList.innerHTML = "";
      option = sessionStorage.getItem("option");
      if (option == "results") {
        for (let i = 0; i < result.length; i++) {
          const newList = document.createElement("li");
          newList.textContent = result[i];
          mainList.append(newList);
        }
      } else if (option == "lucky") {
        const newList = document.createElement("li");
        randomItem = Math.floor(Math.random() * result.length);
        newList.textContent = result[randomItem];
        mainList.append(newList);
      }
    });
}
