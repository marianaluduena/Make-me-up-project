// Here goes everything about the shopping cart

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

        // Modal content (products added)

        let cartContent = document.createElement("div");
        cartContent.className = "modal-content p-2";
        cartContent.innerHTML = `

    <div class="cart__products__container">
   
    <img src = "${product.img}" alt= "${product.name}" class="img-fluid img__product__cart "/>

    <h3 class="p-2"> ${product.name} </h3>
    <p class="p-2"> $ ${product.price} </p>
    <span class= "d-flex justify-content-center" id="delete"> X </span>
    
    </div>
    `
        modalContainer.append(cartContent);

        const closeBtnProduct = document.getElementById("delete");
        
        // Event listener to the X in the cart to delete a product

        closeBtnProduct.addEventListener("click", deleteProduct);


    });

    // Modal footer

    const total = shoppingCart.reduce((acc, element) => acc + element.price, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "shoppingCartTotal p-2";
    totalBuying.innerHTML = `Total: $ ${total} `
    modalContainer.append(totalBuying);

};


// Adding the event listener to show the cart with the function showCart

showShoppingCart.addEventListener("click", showCart);

// Delete product from the cart

const deleteProduct = () => {

    // First find the product's id that the user wants to delete from the cart

    const findProductsId = shoppingCart.find((element) => element.id);

    // Read every element on the cart and leave those when their id is different from the product the user wants to delete

    shoppingCart = shoppingCart.filter((cartId) => {

        return cartId !== findProductsId;
    });

    showCart();


};