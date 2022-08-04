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
    console.log(listaProductos)
    }

function finCompra(){
    resultado > 0 ? swal("Compra realizada!", "Gracias por confiar en nosotros", "success") : swal("Error", "No has seleccionado ningun producto", "error");
}    

//LocalStorageLista   
function localPintar(a){
    for (let a of listaProductos){
        let tabla = document.querySelector(".tabla");
        let filaTabla = document.createElement("tr");
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
    do{
        let tablas = document.getElementById('borrar')
        tablas.remove();
    }while (tablas =! 0);
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
    constructor(nombre, material, forrado, tipo, precio){
        this.nombre = nombre.toUpperCase();
        this.material = material.toUpperCase();
        this.forrado = forrado.toUpperCase();
        this.tipo = tipo.toUpperCase(); 
        this.precio = parseFloat(precio); 
    }
}
const mate0 = new Mates('Mate Comun' , 'Calabaza',  'Cuero oscuro', 'Camionero', '2500');

class Termos{
    constructor(nombre, material, capacidad, precio){
    this.nombre = nombre.toUpperCase();
    this.material = material.toUpperCase();
    this.capacidad = capacidad.toUpperCase();
    this.precio = parseFloat(precio); 
    }
}
const termo0 = new Termos('Termo Media Manija', 'Metal', '1 Litro', '3500');

class Bombilla{
    constructor(nombre, material, precio){
    this.nombre = nombre.toUpperCase();
    this.material = material.toUpperCase();
    this.precio = parseFloat(precio); 
    }
}
const bombilla0 = new Bombilla('Bombilla Cuchara', 'Metal', '600');