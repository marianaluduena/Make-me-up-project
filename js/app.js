
const productsContainer = document.getElementById("productsContainer");

// Catching id to show shoppingCart

const showShoppingCart = document.getElementById("shoppingCart");

// Catching id to show the modal

const modalContainer = document.getElementById("modalContainer");


let shoppingCart = [];

// First, I'm going to show all the products

products.forEach((product) => {

    let content = document.createElement("div");
    content.className = "col-12 col-md-6 col-lg-4 m-2 shop_card_product";
    content.innerHTML = `
    
    <div class="col-12 p-3">
    <img class="img__product img-fluid" src="${product.img}" alt="${product.name}" />
    <div class="card-body">
    <h3 class="text-center p-2 card-title">${product.name} </h3>
    <p class="d-flex justify-content-center mx-1 card-text">$ ${product.price} </p>
    </div>
    </div>
    
    `;

    // Adding the array of products to the index inside a div called productsContainer
    productsContainer.append(content);

    // Creating a buy btn

    let buyBtn = document.createElement("button");
    buyBtn.className = "btn btn-dark buy__btn"
    buyBtn.innerText = "Buy";
    content.append(buyBtn);

    // Event listener buyBtn

    buyBtn.addEventListener("click", () => {

        shoppingCart.push({

            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
        });
        console.log(shoppingCart);
    });
});

// Event listener to show the shopping cart

showShoppingCart.addEventListener("click", () => {

    // Clear all the items from the cart before showing the cart again and preventing to replicate the products with every click on the cart btn

    modalContainer.innerHTML = " ";

    // Code to show the cart every time I click the btn

    modalContainer.style.display = "block";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h2 class="modal-header-title p-2"> Your Cart<h2/>
        `
    modalContainer.append(modalHeader);

    // Close button modal

    const modalCloseBtn = document.createElement("span");
    modalCloseBtn.innerText = "X";
    modalCloseBtn.className = "modal-header-button m-3 p-2 d-flex";

    modalCloseBtn.addEventListener("click", () => {

        modalContainer.style.display = "none";

    });

    modalHeader.append(modalCloseBtn);

    shoppingCart.forEach((product) => {

        // Modal content

        let cartContent = document.createElement("div");
        cartContent.className = "modal-content p-2";
        cartContent.innerHTML = `

    <div class="cart__products__container">
   
    <img src = "${product.img}" alt= "${product.name}" class="img-fluid img__product__cart "/>

    <h3 class="p-2"> ${product.name} </h3>
    <p class="p-2"> $ ${product.price} </p>
    <span class="d-flex justify-content-center"> X </span>

    <div>
    `
        modalContainer.append(cartContent);
    });

    // Modal footer

    const total = shoppingCart.reduce((acc, element) => acc + element.price, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "shoppingCartTotal p-2";
    totalBuying.innerHTML = `Total: $ ${total} `
    modalContainer.append(totalBuying);

});
