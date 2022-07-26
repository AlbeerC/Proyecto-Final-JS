class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    precioIva() {
        this.precio = this.precio * 1.21;
    }
}

const productos = [];

productos.push (new Producto("Air Jordan 1 University", 75000));
productos.push (new Producto("Air Jordan 1 Low", 45000));
productos.push (new Producto("Adidas EQ 21", 26000));
productos.push (new Producto("Nike Air Max 90", 30000));

for (const producto of productos) {
    producto.precioIva();
}