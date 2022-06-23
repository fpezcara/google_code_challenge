const searchButton = document.querySelector("#submit");
const luckyButton = document.querySelector("#lucky");
const form = document.querySelector("form");

searchButton.addEventListener("click", () =>{
  const option = "normal";
  newPage(option)
});
luckyButton.addEventListener("click", () => {
  const option = "lucky";
  newPage(option)
});
form.addEventListener("submit", (e) =>{
  e.preventDefault()
  const option = "normal";
  newPage(option)
});

function newPage(option) {
  const input = search.value.trim();
  console.log(input)
  if (/^\s*$/.test(input) != true){
    sessionStorage.setItem("option", option);
    sessionStorage.setItem("input", input);
    window.location.href = "resultspage.html";
  }
}
