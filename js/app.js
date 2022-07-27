class Producto {
    constructor(marca, modelo, precio) {
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

productos.push (new Producto("Air Jordan", "1 Low", 42000));
productos.push (new Producto("Air Jordan", "1 University", 75000));
productos.push (new Producto("Air Jordan", "6 Retro", 70000));
productos.push (new Producto("Air Jordan", "4 Retro", 55000));
productos.push (new Producto("Air Jordan", "11 Retro", 75000));
productos.push (new Producto("Air Jordan", "1 Clasic", 47000));

productos.push (new Producto("Nike", "Air Max 90", 25000));
productos.push (new Producto("Nike", "Air 270", 22000));
productos.push (new Producto("Nike", "Air Force 1 low", 17000));
productos.push (new Producto("Nike", "Air Max 97", 35000));
productos.push (new Producto("Nike", "Vapormax", 48000));
productos.push (new Producto("Nike", "Dunk High", 38000));

productos.push (new Producto("Adidas", "EQ 21", 26000));
productos.push (new Producto("Adidas", "Yeezy 350", 85000));
productos.push (new Producto("Adidas", "Yeezy 700", 70000));
productos.push (new Producto("Adidas", "Forum", 31000));
productos.push (new Producto("Adidas", "Yeezy 500", 43000));
productos.push (new Producto("Adidas", "Superstar", 25000));

productos.push (new Producto("Puma", "Softride Enzo NXT", 17000));
productos.push (new Producto("Puma", "R78", 16000));
productos.push (new Producto("Puma", "Flyer Flex", 13000));
productos.push (new Producto("Puma", "Smash V2", 12000));


for (const producto of productos) {
    producto.precioIva();
}

for (const producto of productos) {
    producto.precioDescuento();
}


let queFiltro = parseInt(prompt("¿Como desea filtrar los productos? \n 1. Por marca \n 2. Por precio \n 0. Salir del programa"));

if (queFiltro == 1) {
    filtrarPorMarca();
} else if (queFiltro == 2) {
    filtrarPorPrecio();
}

// Función para filtrar por marca
function filtrarPorMarca() {
    let opciones = parseInt(prompt("Elija la marca \n 1. Air Jordan. \n 2. Nike \n 3. Adidas \n 4. Puma \n 0. Salir del programa \n (Ver en consola la lista de productos)"));

    switch (opciones) {
        case 1:
            let jordan = productos.filter(productos => productos.marca == "Air Jordan");
            Producto.toString();
            console.log(jordan);
        break;

        case 2:
            let nike = productos.filter(productos => productos.marca == "Nike");
            console.log(nike);
        break;

        case 3:
            let adidas = productos.filter(productos => productos.marca == "Adidas");
            console.log(adidas);
        break;
        
        case 4:
            let puma = productos.filter(productos => productos.marca == "Puma");
            console.log(puma);
        break;    

    }
}


// Función para filtrar por precio
function filtrarPorPrecio() {
    let quePrecio = parseInt(prompt("Elija el rango de precio \n 1. 0 a 20.000. \n 2. 20.000 a 50.000 \n 3. 50.000 a 120.000 \n 0. Salir del programa \n (Ver en consola la lista de productos)"));

    switch (quePrecio) {
        case 1:
            let filtro1 = productos.filter(productos => productos.precio > 0 && productos.precio < 20000);
            console.log(filtro1)
            break;
    
        case 2:
            let filtro2 = productos.filter(productos => productos.precio > 20000 && productos.precio < 50000)
            console.log(filtro2)
            break;
    
        case 3:
            let filtro3 = productos.filter(productos => productos.precio > 50000 && productos.precio < 120000)
            console.log(filtro3);
            break;   
    }
}