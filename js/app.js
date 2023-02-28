const loadCatagory = ()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => showCatagories(data.data.news_category))
}

const showCatagories = (catagories) =>{

    console.log(catagories)

    catagories.forEach(catagory => {

        console.log(catagory)
        const allCatagories = document.getElementById('display-catagory');
        allCatagories.innerHTML += 
        `<li><a class="text-xl font-semibold" href="#">${catagory.category_name}</a></li>`;
        
    });
}
loadCatagory()