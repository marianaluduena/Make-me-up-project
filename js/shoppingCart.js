// Here goes everything about the shopping cart

// Catching id to show shoppingCart

const showShoppingCart = document.getElementById("shoppingCart");

// Event listener to show the shopping cart


//showShoppingCart.addEventListener("click", () => {

const showCart = () => {
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

};

// Adding the event listener to show the cart with the function showCart

showShoppingCart.addEventListener("click", showCart());