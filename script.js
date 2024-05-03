const BASE_URL = "https://api.giphy.com";
const API_KEY = "6FooVD77mC0C5anr03X6Lp0HjHVBTfZ6";
const searchBtn = document.querySelector(".js-search-btn");
let search = document.querySelector(".js-search-item");
let quantity = document.querySelector(".js-quantity");
let container = document.querySelector(".js-container");
let menuBtn=document.querySelector(".js-menu-btn");
let menu=document.querySelector('.js-menu-items');

searchBtn.addEventListener("click", async () => {
  let searchValue = search.value;
  let quantityValue = quantity.value;
  search.value = "";
  if (searchValue.trim() === "") {
    container.innerHTML = `<p class='warning'>Please Enter Valid Search</p>`;
    return;
  }
  try {
    let response = await fetch(
      `${BASE_URL}/v1/gifs/search?api_key=${API_KEY}&q=${searchValue}&limit=${quantityValue}`
    );
    let responseJson = await response.json();
    let data = responseJson.data;
    container.innerHTML = "";
    if (data.length > 0) {
      for (let x in data) {
        container.innerHTML =
          container.innerHTML + `<img src=${data[x].images.original.url}>`;
      }
    } else {
      container.innerHTML = `<p class='warning'>Sorry. No results have been found.</p>`;
    }
  } catch {
    container.innerHTML += `<p class='warning'>Sorry No results have been found.</p>`;
  }
});

function displayMenu(){
  if(window.innerWidth < 768){
  menu.classList.add("hidden");
  }
}
displayMenu();

menuBtn.addEventListener("click", ()=>{
    menu.classList.toggle('hidden');
});
