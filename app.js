//Logica de la App para agregar Producto
//clase Producto
class Producto {
    constructor(nombre, precio, year) {
        this.nombre = nombre;
        this.precio = precio;
        this.year = year;
    }
}
;

//Clase UI para modificar el dom.
class UI {

    //METODOS
    addProucto(producto) {
        //buscar elemento del dom
        const elemento = document.createElement('div');

        //crear string con las etiquetas
        elemento.innerHTML = `
        <div class="card text-center mb-4">
            <div class ="card-body">
                <strong>Producto Nombre </strong>:${producto.nombre}
                <strong>Precio </strong>:${producto.precio}
                <strong>Ano </strong>:${producto.year}
            </div>
        </div>
        `;

        const productList = document.getElementById('product-list');
        productList.appendChild(elemento);
    };

    delProducto(elemento) {
        //buscar elemento del dom 
    };
}

//enventos del dom
document.getElementById('product-form')
    .addEventListener('submit', function (e) {
        //agregar funcionalidad aqui
        console.log('Evento Submit ok!');
        
    });


