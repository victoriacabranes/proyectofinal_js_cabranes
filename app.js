/** 
 * Opcion: 1.Agregar productos al carrito 2.Ver total de compra 0.Salir
 * 1. Mostrar lista de productos e ingresar de a uno mientras se va sumando al carrito. Despues de ingresar,
 * preguntas si desea agregar mas o ver suma total. 
 * 2. Ver el total del carrito con una lista de los productos ingresados. Si no ingreso nada, solo aparece el lapiz de regalo.
 *
*/

//productos
let products = [
    {
        id: 1,
        product: "Cartuchera",
        price: 1200
    },

    {
        id: 2,
        product: "Agenda",
        price: 1500
    },

    {
        id: 3,
        product: "Regla",
        price: 300
    },

    {
        id: 4,
        product: "Post-It",
        price: 850
    },

    {
        id: 5,
        product: "Lapicera Bic",
        price: 200
    }
];

let shoppingCart = [];

let option;

while (option !== 0) {
    option = Number(prompt("Elija una opción:\n1. Agregar productos al carrito \n2. Ver total de compra \n0. Salir" ));

    switch (option) {
        case 1:
                const inputId = Number(prompt("Ingrese el producto que desea agregar:\n1. Cartuchera ($1200) \n2. Agenda ($1500) \n3. Regla ($300) \n4. Post-It ($850) \n5. Lapicera Bic ($200)"));
                addProduct(inputId);
            break;
        case 2:
                const totalPrice = shoppingCart.map(product => product.price).reduce((acc, cur) => acc + cur);
                const totalProducts = shoppingCart.map(product => product.product);
                alert("tu precio final es de: " + totalProducts + " $: " + totalPrice)
                const option = Number(prompt("Desea quitar un producto? Ingrese \n1. Si \n2. No"))
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



// funcion para agregar los productos al carrito.
function addProduct (inputId) {
    const product = products.find((product) => product.id === inputId);
    shoppingCart.push(product);
}

function deleteProduct (inputId) {
    const product = products.find((product) => product.id === inputId);
    shoppingCart.pop(product);
}
