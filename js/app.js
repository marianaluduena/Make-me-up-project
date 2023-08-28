

const productsContainer = document.getElementById("productsContainer");

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


