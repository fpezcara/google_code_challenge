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
  const option = "results";
  newPage(option)
}

function luckyResults() {
  const option = "lucky";
  newPage(option)
}
function newPage(option) {
  const input = search.value.trim();
  console.log(input)
  if (/^\s*$/.test(input) != true){
    sessionStorage.setItem("option", option);
    sessionStorage.setItem("input", input);
    window.location.href = "resultspage.html";
  }
}
