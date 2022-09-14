

class Product {
    constructor(id,name,image,price,stock) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price,
        this.stock = stock;
    }
}

const product1 = new Product(1, "Eyeliner", "images/eyelinner.webp", 1500, 1);
const product2 = new Product(2, "Paleta de Sombras", "images/eyeshadow.webp", 7000, 1);
const product3 = new Product(3, "Labial", "images/lipstick.webp", 2100, 1);
const product4 = new Product(4, "Iluminador", "images/highlighter.webp", 1800, 1);

const products = [];
products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);

let shoppingCart = [];

// funcion para mostrar productos en el html 
function showProducts (products) {
    const containerProducts = document.getElementById("containerProducts")
    containerProducts.innerHTML = "";

    
    products.forEach((product) => {
        const divProduct = document.createElement("div");
        divProduct.classList.add("product");
        divProduct.innerHTML = `<h2>${product.name}</h2> <img src="${product.image}" alt=""> <h3>$ ${product.price}</h3> <button id= "add${product.id}" type="button">Agregar</button> `;
        
        containerProducts.appendChild(divProduct);

        const btn = document.getElementById(`add${product.id}`)

        btn.addEventListener("click", () => {
            addShoppingCart(product.id)
        })
    });
}

// funcion para agregar productos al carrito 
const addShoppingCart = (productId) => {
    const item = products.find((p) => p.id === productId)
    shoppingCart.push(item)
}
showProducts(products);
console.log(shoppingCart);

// creo boton carrito
const containerCart = document.getElementById("cart")
containerCart.innerHTML = "";
const divCart = document.createElement("div")
divCart.innerHTML = `<button type=button id=cartBtn>Carrito</button>`
containerCart.appendChild(divCart)

// funcion para mostrar carrito 
const btnCart = document.getElementById("cartBtn")
btnCart.addEventListener('click', () => {
    const totalPrice = shoppingCart.map(product => product.price).reduce((acc, cur) => acc + cur);
    const totalProducts = shoppingCart.map(product => product.stock + product.name);

    const divCartDisplay = document.createElement("div")
    divCartDisplay.innerHTML = `<h3>Productos: ${totalProducts} </h3> <h4>Precio total: $${totalPrice}</h4>`
    containerCart.appendChild(divCartDisplay)
})


