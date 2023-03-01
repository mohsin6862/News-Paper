const loadCatagory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => showCatagories(data.data.news_category))
}

const showCatagories = (catagories) => {

    console.log(catagories)

    catagories.forEach(singleCategory => {

        console.log(singleCategory)
        const allCatagories = document.getElementById('display-catagory');
        allCatagories.innerHTML +=
            `<li><a class="text-xl font-semibold" href="#"  onclick="displayCategoryNews('${singleCategory.category_id}', '${singleCategory.category_name}')">${singleCategory.category_name}</a></li>`;

    });
}

const displayCategoryNews = (category_id, category_name) => {

    const url = ` https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
        .then(res => res.json())
        .then(data =>
            showAllNews(data.data, category_name)
        );
}

const showAllNews = (data, category_name) => {
    console.log(data, category_name)

    const itemFound = document.getElementById('items-found');
    itemFound.innerText = data.length;

    const catagoryFound = document.getElementById('catagory-found');
    catagoryFound.innerText = category_name;

    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML ='';
    // data.forEach(news =>{

    //     const { _id, image_url, title, details, author, total_view,rating } = news;
    //     console.log(news)

    //     const card = document.createElement("div");
    //     card.classList.add("card", "mb-3");
    //     card.innerHTML =`      
    //     <div class="card lg:card-side bg-base-100 shadow-xl p-5">
    //     <figure><img src="${image_url}" alt="Album"/></figure>
    //     <div class="card-body">

    //       <h2 class="card-title">${_id}</h2>
    //       <h2 class="card-title">${title}</h2>
    //       <p>${details}</p>


    //     </div>
    //   </div>`;
    //   newsContainer.appendChild(card);


    // });

    data.forEach((singleNews) => {
        const { _id, image_url, title, details, author, total_view, rating } = singleNews;
        // newsContainer.innerHTML += ``
        const card = document.createElement("div");
        card.classList.add("card", "mb-3");
        card.innerHTML = `
        <div class="card lg:card-side bg-base-100 shadow-xl p-5">
    <figure><img  src="${image_url}" alt="Album" /></figure>
    <div class="card-body">

        
        <h2 class="card-title">${title}</h2>
        <p>${details.slice(0, 200)}...</p>

    </div>
</div>
        `;

        newsContainer.appendChild(card);
    });
}





loadCatagory();




