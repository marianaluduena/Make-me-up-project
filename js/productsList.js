const products = [{
    id: 1,
    name: "Body lotion",
    price: 2000,
    img: "../img/products/crema__corporal.png",
},

{
    id: 2,
    name: "Black eyeliner",
    price: 1500,
    img: "../img/products/delineador.png"

},

{
    id: 3,
    name: "Red Lipstick",
    price: 2500,
    img: "../img/products/labial.png",
},

{
    id: 4,
    name: "Eye shadow palette",
    price: 1000,
    img: "../img/products/sombra__de__ojos.png",
},

{
    id: 5,
    name: "Shampoo",
    price: 3000,
    img: "../img/products/shampoo.png",
},

{
    id: 6,
    name: "Pink Blush",
    price: 3500,
    img: "../img/products/rubor.png"
}
];

products.forEach((product) => {


    let content = document.createElement("div");
    content.className = "col-12 col-md-6 col-lg-4 m-2";
    content.innerHTML = `
    <div class="row">
    <div class="col-12 p-3">
    <img class="img__product img-fluid" src="${product.img}" alt="${product.name}" />
    <div class="card-body">
    <h3 class="text-center p-2 card-title">${product.name} </h3>
    <p class="mx-1 card-text">${product.price} $</p>
    </div>
    </div>
    </div>
    `;

    // Adding the array of products to the index inside a div called shopContent
    productsContainer.append(content);

    // Creating a buy btn

    let buyBtn = document.createElement("button");
    buyBtn.className = "btn btn-dark buy__btn"
    buyBtn.innerText = "Buy";
    content.append(buyBtn);
});