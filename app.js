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

    //metodo borrar elemento del dom
    delProducto(elemento) {
        //buscar elemento del dom 
    };

    //metodo mostrar mensaje 
    showMessage(mensaje , ccsClass){

    };
}

//enventos del dom
document.getElementById('product-form')
    .addEventListener('submit', function (e) {
        //agregar funcionalidad aqui
        console.log('Evento Submit ok!');

        //obtener valores del form
        const nombre = document.getElementById('nombre').value;
        const precio = document.getElementById('precio').value;
        const anno   = document.getElementById('anno').value;

        if (nombre === '' || precio === '') {
            console.log('error , datos incompletos');
            return;
        }

        //crear objeto Producto
        const producto = new Producto(nombre,precio,anno);
        //crear objeto UI
        const ui = new UI();

        ui.addProucto(producto);

        //evitar el refresh del form
        e.preventDefault();

    });


