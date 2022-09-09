
const products = [
    {
        id: 1,
        product: "Cartuchera",
        price: 1200,
        stock: 1
    },

    {
        id: 2,
        product: "Agenda",
        price: 1500,
        stock: 1
    },

    {
        id: 3,
        product: "Regla",
        price: 300,
        stock: 1
    },

    {
        id: 4,
        product: "Post-It",
        price: 850,
        stock: 1
    },

    {
        id: 5,
        product: "Lapicera Bic",
        price: 200,
        stock: 1
    }
];

const shoppingCart = [];

let option;

while (option !== 0) {
    option = Number(prompt("Elija una opción:\n1. Agregar productos al carrito \n2. Ver total de compra \n0. Salir" ));

    switch (option) {
        case 1:
                const inputId = Number(prompt("Ingrese el producto que desea agregar:\n1. Cartuchera ($1200) \n2. Agenda ($1500) \n3. Regla ($300) \n4. Post-It ($850) \n5. Lapicera Bic ($200)"));
                addProduct(inputId);
            break;
        case 2:
                if (shoppingCart.length === 0) {
                    alert("No tienes nada en el carrito de compras")
                } else {
                    const totalPrice = shoppingCart.map(product => product.price).reduce((acc, cur) => acc + cur);
                    const totalProducts = shoppingCart.map(product => product.stock + product.product);
                    alert("tu precio final es de: " + totalProducts + " " + "\n$: " + totalPrice);
                    const option = Number(prompt("Desea quitar un producto? Ingrese \n1. Si \n2. No"));
                    
                    // se muestra el resultado total que se llevo en el carrito al salir
                    const cart = document.getElementById("cart");
                    const p = document.createElement("p");
                    p.innerHTML = `<p>${totalProducts} y precio total a pagar: ${totalPrice}`
                    cart.append(p)
                }
                if (option === 1) {
                    const inputId = Number(prompt("Ingrese el producto que desea eliminar: \n1. Cartuchera ($1200) \n2. Agenda ($1500) \n3. Regla ($300) \n4. Post-It ($850) \n5. Lapicera Bic ($200)"));
                    deleteProduct(inputId);
                }
            break;
        case 0:
                alert("Gracias por su visita. Vuelva pronto")
            break;
        default:
                alert("La opción ingresada no es correcta, intente nuevamente");
            break;
    }
}

//funciones para el switch

function addProduct (inputId) {
    const product = products.find((product) => product.id === inputId);
    if (shoppingCart.find(p => p.id === product.id)) {
    let index = shoppingCart.findIndex(item => item.id === product.id);
    shoppingCart[index].stock = shoppingCart[index].stock + 1 ;
    shoppingCart[index].price = shoppingCart[index].price * shoppingCart[index].stock;
    return
    } else {
    return shoppingCart.push(product);
    }
}


function deleteProduct (inputId) {
    const product = products.find((product) => product.id === inputId);
    shoppingCart.pop(product);
}

  