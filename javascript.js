function sumar (a){
    resultado = resultado + a;          
}

function siQuieres(a){
        sumar (a.precio)
        listaProductos.push(a.nombre);
        localStorage.setItem('listaProductos', JSON.stringify(listaProductos))
        Toastify({

            text: "Se agrego " + (a.nombre),
            
            duration: 3000,
            
            style: {
                background: "linear-gradient(to right, #76b852, #8dc26f)",
              }
            }).showToast();
    }

function actual(){
    localStorage.setItem('resultado', resultado)
    let montoActual = document.getElementById("montoActual");
    montoActual.innerHTML = resultado;
    a = localStorage.getItem('resultado')
}

//LocalStorageNumeros----------------------
    let aux2 = localStorage.getItem('resultado')
    let resultado = 0;
    !aux2 ? resultado : montoActual = document.getElementById("montoActual"), resultado = parseFloat(aux2), montoActual.innerHTML = parseFloat(resultado);

function clearBoton(){
    resultado = 0;
    montoActual.innerHTML = 0;
    listaProductos.splice(0, listaProductos.length);
    localStorage.setItem('listaProductos', JSON.stringify(listaProductos))
    localStorage.setItem('resultado', resultado)
}

function tablaLista(a){
        let tabla = document.querySelector(".tabla");
        let filaTabla = document.createElement("tr");
        filaTabla.innerHTML = `
        <td id="borrar">-${a}</td>
        `
    tabla.append(filaTabla);
    }

function finCompra(){
    resultado > 0 ? swal("Compra realizada!", "Gracias por confiar en nosotros", "success") : swal("Error", "No has seleccionado ningun producto", "error");
}    

//LocalStorageLista   
function localPintar(a){
    for (let a of listaProductos){
        let tabla = document.querySelector(".tabla");
        let filaTabla = document.createElement("tr");
        filaTabla.setAttribute('id', 'borrar');
        filaTabla.innerHTML = `
        <td id="borrar">-${a}</td>
        `
    tabla.append(filaTabla);
    }
}
//LocalStorage----------------------
    let aux = localStorage.getItem('listaProductos')
    let listaProductos;
    !aux ? listaProductos = [] : listaProductos = JSON.parse(aux), localPintar(listaProductos);

function borrarLista(){
    let tablas = document.querySelectorAll('#borrar')
    let count = 0;
    for (item of tablas ){
        if(count >= 0){
            item.remove();
        }
        count += 1;
    }
}

var modal = document.getElementById("hi");
var btn = document.getElementById("botonAbrir");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
    span.style.display = "block";
    btn.style.display = "none";
}

span.onclick = function() {
    modal.style.display = "none";
    btn.style.display = "block";
}

window.onclick = function(event) {
    event.target == modal ?  modal.style.display = "block" : 0;
}

class Mates{
    constructor(nombre,precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio); 
    }
}
const mate0 = new Mates('Mate Comun', '2500');

class Termos{
    constructor(nombre,precio){
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio); 
    }
}
const termo0 = new Termos('Termo Media Manija','3500');

class Bombilla{
    constructor(nombre,precio){
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio); 
    }
}
const bombilla0 = new Bombilla('Bombilla Cuchara','600');


fetch('productos.json')
.then( (res) => res.json())
.then( (data) => { 

    lectorTitulo = document.querySelectorAll('#titulo');
    lectorDescrip = document.querySelectorAll('#descripcionProducto');
    lectorPrecio = document.querySelectorAll('#precio');
    
    const myArray = data;

    myArray.map( (data) => {
        const titulo = data.nombre;
        const descripcion = data.descripcion;
        const precio = data.precio;

        if(titulo === "MATE COMUN"){
            lectorTitulo[0].innerHTML = titulo;
        }else if (titulo ==="TERMO MEDIA MANIJA"){
            lectorTitulo[1].innerHTML = titulo;
        }else if(titulo ==="BOMBILLA CUCHARA"){
            lectorTitulo[2].innerHTML = titulo;
        }

        if(descripcion === "Mate Camionero de calabaza forrado con cuero. "){
            lectorDescrip[0].innerHTML = descripcion;
        }else if (descripcion === "Termo Media Manija de Acero con capacidad de 1 Litro. "){
            lectorDescrip[1].innerHTML = descripcion;
        }else if(descripcion ==="Bombilla Cuchara de metal. "){
            lectorDescrip[2].innerHTML = descripcion;
        }

        if(precio === "$2500"){
            lectorPrecio[0].innerHTML = precio;
        }else if (precio === "$3500"){
            lectorPrecio[1].innerHTML = precio;
        }else if(precio ==="$600"){
            lectorPrecio[2].innerHTML = precio;
        }
    })
})