class Producto {
    constructor( marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    precioIva() {
        this.precio = this.precio * 1.21;
    }

    precioDescuento() {
        this.precio = this.precio  - (this.precio * (5 / 100));
    }
}

const productos = [];

productos.push (new Producto( "Air Jordan", "1 Low", 42000));
productos.push (new Producto( "Air Jordan", "1 University", 75000));
productos.push (new Producto( "Air Jordan", "6 Retro", 70000));
productos.push (new Producto( "Air Jordan", "4 Retro", 55000));
productos.push (new Producto( "Air Jordan", "11 Retro", 75000));
productos.push (new Producto( "Air Jordan", "1 Clasic", 47000));

productos.push (new Producto( "Nike", "Air Max 90", 25000));
productos.push (new Producto( "Nike", "Air 270", 22000));
productos.push (new Producto( "Nike", "Air Force 1 low", 17000));
productos.push (new Producto( "Nike", "Air Max 97", 35000));
productos.push (new Producto( "Nike", "Vapormax", 48000));
productos.push (new Producto( "Nike", "Dunk High", 38000));

productos.push (new Producto( "Adidas", "EQ 21", 26000));
productos.push (new Producto( "Adidas", "Yeezy 350", 85000));
productos.push (new Producto( "Adidas", "Yeezy 700", 70000));
productos.push (new Producto( "Adidas", "Forum", 31000));
productos.push (new Producto( "Adidas", "Yeezy 500", 43000));
productos.push (new Producto( "Adidas", "Superstar", 25000));

productos.push (new Producto( "Puma", "Softride Enzo NXT", 17000));
productos.push (new Producto( "Puma", "R78", 16000));
productos.push (new Producto( "Puma", "Flyer Flex", 13000));
productos.push (new Producto( "Puma", "Smash V2", 12000));

console.log(...productos);


// Creo la función general para guardar productos en el localstorage
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

// Recorre todos los productos y los va guardando
for (const producto of productos) {
    guardarLocal(producto.modelo, JSON.stringify(producto));
}

// Guardar el array entero
guardarLocal("listaEntera", JSON.stringify(productos));


//Obtener la lista de productos guardados
const guardados = JSON.parse(localStorage.getItem("listaEntera"));
const carrito = [];

//Transformar todos los objetos a tipo producto
for (const objeto of guardados) {
    carrito.push(new Producto(objeto));
}

// Usar los métodos

for (const producto of productos) {
    producto.precioIva();
}

for (const producto of productos) {
    producto.precioDescuento();
}
