const categoryContainer= document.getElementById('categoryContainer')
const newsContainer=document.getElementById('newsContainer')
const cart=document.getElementById('cart')

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
        // console.log(categoryId)
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
// console.log(plants)
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
       
       <button class="add-to-cart my-3 text-white w-full text-lg bg-[#166534] rounded-2xl" data-price="${plant.price}">Add to Cart</button>

    </div>`
})


}
//--------------------
// ---------------- Cart Functionality ----------------
let cartItems = [];
let totalPrice = 0;

// Function to render cart
function renderCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';

    cartItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('flex', 'justify-between', 'items-center', 'my-2', 'border-b', 'pb-1');
        div.innerHTML = `
            <span>${item.name}</span>
            <span>${item.price} <button data-index="${index}" class="remove text-red-500 ml-2">❌</button></span>
        `;
        cartContainer.appendChild(div);
    });

    const totalDiv = document.createElement('div');
    totalDiv.classList.add('font-bold', 'mt-2');
    totalDiv.innerText = `Total: ${totalPrice.toFixed(2)}`;
    cartContainer.appendChild(totalDiv);
}

// Add to Cart button click
newsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const card = e.target.closest('div'); // nearest card div
        const name = card.querySelector('h1').innerText; // first h1 assumed to be name
        const price = parseFloat(card.querySelectorAll('h1')[2].innerText) || 0; // 3rd h1 is price

        cartItems.push({ name, price });
        totalPrice += price;

        renderCart();
    }
});

// Remove from Cart button click
cart.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
        const index = e.target.dataset.index;
        totalPrice -= cartItems[index].price;
        cartItems.splice(index, 1);
        renderCart();
    }
});



//--------------------

    }
    loadCategory() 
    loadNewsByCategory(1)   