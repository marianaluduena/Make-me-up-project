const products = [{
    id: 1,
    name: "Body lotion",
    price: 2.000,
    img: "../img/products/crema__corporal.png",
},

{
    id: 2,
    name: "Black eyeliner",
    price: 1.500,
    img: "../img/products/delineador.png"

},

{
    id: 3,
    name: "Red Lipstick",
    price: 2.500,
    img: "../img/products/labial.png",
},

{
    id: 4,
    name: "Eye shadow palette",
    price: 1.000,
    img: "../img/products/sombra__de__ojos.png",
},

{
    id: 5,
    name: "Shampoo",
    price: 3.000,
    img: "../img/products/shampoo.png",
},

{
    id: 6,
    name: "Pink Blush",
    price: 3.500,
    img: "../img/products/rubor.png"
}
];

products.forEach((product) => {


    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    
    <img class="img__product" src="${product.img}" />
    <h3>${product.name} </h3>
    <p>${product.price} $</p>
    `;

    // Adding the array of products to the index inside a div called shopContent
    productsContainer.append(content);

    // Creating a buy btn

    let buyBtn = document.createElement("button");
    buyBtn.className = "btn btn-dark buy__btn"
    buyBtn.innerText = "Buy";
    content.append(buyBtn);
});