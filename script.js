const BASE_URL = 'https://api.giphy.com';
const API_KEY='6FooVD77mC0C5anr03X6Lp0HjHVBTfZ6';
const searchBtn = document.querySelector('.js-search-btn');
let search = document.querySelector('.js-search-item');
let quantity = document.querySelector('.js-quantity');
let container = document.querySelector('.js-container');



searchBtn.addEventListener('click', async ()=>{
    let searchValue=search.value;
    let quantityValue = quantity.value;
    search.value='';
    if(searchValue==''){
        alert('enter search value')
        return ;
    }
    let response = await fetch (`${BASE_URL}/v1/gifs/search?api_key=${API_KEY}&q=${searchValue}&limit=${quantityValue}`);
    let data = await response.json();
    console.log(data);
    if(data.data.length>0){
        container.innerHTML=''
    }
    });
