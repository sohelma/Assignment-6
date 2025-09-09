const categoryContainer= document.getElementById('categoryContainer')
const newsContainer=document.getElementById('newsContainer')

const loadCategory=()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
.then(res=>res.json())
.then(data=>{
    console.log(data.categories);
    const categories=data.categories
    // console.log(categories)
    showCategory(categories)
})
.catch(err=> {
    console.log(err)    
});
};

    const showCategory=(categories)=>{
        categories.forEach(cat => {
        categoryContainer.innerHTML+=`
            <li id="${cat.id}" class="px-4 py-2 rounded-lg hover:bg-[#15803D] hover:text-white">${cat.category_name}</li>`
        });

    categoryContainer.addEventListener('click',(e)=>{
        
        
        
       const allLi=document.querySelectorAll('li') 
       allLi.forEach(li=>{li.classList.remove('active')})
        if(e.target.localName==='li')
    {
        // console.log(e.target.id)
        e.target.classList.add('active')
        loadNewsByCategory(e.target.id)

    }
    });
    };

    const loadNewsByCategory=(categoryId)=>{
        console.log(categoryId)
       fetch (`https://openapi.programming-hero.com/api/category/${categoryId}`)
       .then(res=>res.json())
       .then(data=>{
        // console.log(data.plants)
        showNewsByCategory(data.plants)
       })
       .catch(err=>{
        console.log(err)
       })

const showNewsByCategory=(plants)=>{
console.log(plants)
newsContainer.innerHTML=""
plants.forEach(plant=>{
    newsContainer.innerHTML+=`
    <div class="bg-white rounded-xl shadow-lg overflow-hidden w-full h-130 border border-gray-200">
             
        <div> <img src="${plant.image}" class="w-full h-48 "/> </div>
            <h1 class="my-3"> ${plant.name}</h1>
            <h1 class="my-3"> ${plant.description}</h1>
       <div class="flex justify-between items-center mt-3">
            <h1> ${plant.category}</h1>
            <h1> ${plant.price}</h1>
       </div>
        <button class="my-3 text-white w-full text-lg bg-[#166534] rounded-2xl">Add to Cart</button>
    </div>`
})
}
    }
    loadCategory() 
    loadNewsByCategory(1)   