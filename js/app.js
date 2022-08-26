// Variables principales

const lista = document.querySelector(".lista-productos");
const contenedorCarrito = document.getElementById("contenedorCarrito");
const btnVaciar = document.getElementById("vaciarCarrito");
const contadorCarrito = document.getElementById("contador");
const cantidad = document.getElementById("cantidad");
const precioTotal = document.getElementById("precioTotal");

let carrito = [];

// Guardar productos del carrito desde el LocalStorage

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        actualizarCarrito();
    }
})

// Generar el HTML desde un archivo JSON local

fetch("../data/stock.json")
    .then( (res) => res.json())
    .then( (data) => {
    data.forEach((producto) => {
        const item = document.createElement("div")
        item.className = "item"
        item.innerHTML = `
            <h3>${producto.marca} ${producto.modelo}</h3>
            <img src="${producto.imagen}"></img>
            <p>$${producto.precio}</p>
            <button id="agregar${producto.id}" class="btnAgregar">Añadir al carrito <i class="fa-solid fa-cart-shopping"></i></i></button>
        `

        lista.appendChild(item);

        // Evento de los botones para agregar al carrito

        const btnAgregar = document.getElementById(`agregar${producto.id}`);
        btnAgregar.addEventListener("click", () => {
            añadirAlCarrito(producto.id)
        })

    })

    // Funcion para agregar productos al carrito. Si ya existe, se suma a la cantidad, si no existe lo agrego

    function añadirAlCarrito (prodId) {

        const existe = carrito.some (prod => prod.id === prodId)
            if (existe) {
                carrito.map (prod => {
                    if (prod.id === prodId) {
                        prod.cantidad++
                    }
                })
            } else {
                const item = data.find((prod) => prod.id === prodId);
                carrito.push(item);
            }
        
        actualizarCarrito();
    }

    }) // Cierra el fetch



// Función para actualizar el carrito cuando se agregue un producto

function actualizarCarrito() {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const item = document.createElement("div")
        item.className = ("productoCarrito")
        item.innerHTML = `
        <p>${prod.marca} ${prod.modelo}</p>
        <p>Precio: $${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick = "eliminarCarrito(${prod.id})" class="btnEliminar"><i class="fa-solid fa-trash-can"></i></button>
        `
    contenedorCarrito.appendChild(item)

    // Recuperar productos del carrito desde el LocalStorage
    localStorage.setItem("carrito", JSON.stringify(carrito))

    })

    // Calcular el precio total teniendo en cuenta las cantidades

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}

// Función para eliminar un producto del carrito

function eliminarCarrito(prodId) {
    const item = carrito.find((prod) => prod.id === prodId);
    const i = carrito.indexOf(item);
    carrito.splice(i, 1);
    actualizarCarrito();
}

// Evento para que funcione el botón de vaciar el carrito

btnVaciar.addEventListener("click", () => {
    carrito.length = 0;
    actualizarCarrito();
})



// Modal

const contenedorModal = document.getElementsByClassName("contenedorModal")[0]
const btnAbrir = document.getElementById("btnCarrito")
const btnCerrar = document.getElementById("btnCerrar")
const carritoModal = document.getElementsByClassName("carritoModal")[0]


btnAbrir.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
});

btnCerrar.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
});

contenedorModal.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
});

carritoModal.addEventListener('click', (e) => {
    e.stopPropagation()
});