const BASE_URL = "https://api.giphy.com";
const API_KEY = "6FooVD77mC0C5anr03X6Lp0HjHVBTfZ6";
const searchBtn = document.querySelector(".js-search-btn");
let search = document.querySelector(".js-search-item");
let quantity = document.querySelector(".js-quantity");
let container = document.querySelector(".js-container");
let menuBtn=document.querySelector(".js-menu-btn");

searchBtn.addEventListener("click", async () => {
  let searchValue = search.value;
  let quantityValue = quantity.value;
  search.value = "";
  if (searchValue == "") {
    container.innerHTML = `<h3 class='warning'>Please Enter Valid Search</h3>`;
    return;
  }
  try {
    let response = await fetch(
      `${BASE_URL}/v1/gifs/search?api_key=${API_KEY}&q=${searchValue}&limit=${quantityValue}`
    );
    let responseJson = await response.json();
    let data = responseJson.data;
    container.innerHTML = "";
    console.log(data.length);
    if (data.length > 0) {
      for (let x in data) {
        container.innerHTML =
          container.innerHTML + `<img src=${data[x].images.original.url}>`;
      }
    } else {
      container.innerHTML = `<h3 class='warning'>Sorry. No result has found.</h3>`;
    }
  } catch {
    container.innerHTML += `<h3 class='warning'>No results found.</h3>`;
  }
});

menuBtn.addEventListener("click", ()=>{
    let menu=document.querySelector('.js-hidden');
    menu.classList.toggle('hidden');
});
