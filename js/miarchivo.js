//SE CREA LA CLASS HAMBURGER
class Hamburger {
    constructor(titulo, imagen, descripcion) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}

//SE CREAN CONSTANTES HAMBURGERS
const hamburger1 = new Hamburger("Cheese Burger", "img/cardburger1.png", "Cheese Burger + Papas + Bebida")
const hamburger2 = new Hamburger("Bondiola Burger", "img/cardburger2.png", "Bondiola Burger + Papas + Bebida" )
const hamburger3 = new Hamburger("American Burger", "img/cardburger3.png", "American Burger + Papas + Bebida" )
const hamburger4 = new Hamburger("Full Burger", "img/cardburger4.png", "Full Burger + Papas + Bebida" )
const hamburger5 = new Hamburger("Chicken Crispy", "img/cardburger5.png", "Chicken Crispy + Papas + Bebida" )

                                                                                                                                                            
//SE CREA EL ARRAY
const hamburgers = []

//SE PUSHEAN LAS CONST HAMBURGER DENTRO DEL ARRAY HAMBURGERS
hamburgers.push(hamburger1);
hamburgers.push(hamburger2);
hamburgers.push(hamburger3);
hamburgers.push(hamburger4);
hamburgers.push(hamburger5);


//FUNCION MOSTRAR HAMBURGUESAS EN HTML
function mostrarHamburger(hamburgers) {

  const cardHamburgers = document.querySelector(".card-hamburgers");
  cardHamburgers.innerHTML = "<h1>Menu: lista de hamburguesas</h1>";
  //PARA CADA UNA DE LAS CARDS
  hamburgers.forEach(hamburger => {
    const divHamburger = document.createElement("div"); 
    divHamburger.classList.add("hamburger");
    divHamburger.innerHTML = `
      <img src="${hamburger.imagen}" alt="${hamburger.titulo}">
      <h3>${hamburger.titulo}</h3>
      <p>Descripción: ${hamburger.descripcion}</p>
      <hr>
    `;
    //SE CREA EL BOTON ADICIONAL
    /*const botonAdicional = crearAdicional(hamburger)
    divHamburger.appendChild(botonAdicional);*/
    //SE CREA EL DIV
    cardHamburgers.appendChild(divHamburger);
  })
}
mostrarHamburger(hamburgers);

//SE CREA LA CLASE COMBO
class Combo {
    constructor(nombre, carne, papas, bebida) {
        this.nombre = nombre;
        this.carne = carne;
        this.papas = papas;
        this.bebida = bebida;
    }
}

//SE LLAMA AL ID POR EL DOM Y SE LE ASIGNA UNA FUNCION
document.querySelector("#formulario-combo").addEventListener("submit", manejadorComboUsuario);

let nombre;
    
function manejadorComboUsuario(e) {
    e.preventDefault();

    let nombre = document.getElementById("user").value; 
    
    const combosCreados = document.getElementById("combosCreados");
    const combos = JSON.parse(localStorage.getItem(nombre));

    //OPERADOR TERNARIO
    combos == null ? combosCreados.innerHTML = "<li>No hay combo</li>" : mostrarCombos(combos);
}



//FUNCION MOSTRARCOMBOS QUE CREA EL IL DENTRO DEL UL "combosCreados"
function mostrarCombos(combos) {
    let combosCreados = document.getElementById("combosCreados");
    combosCreados.innerHTML = "";
  
    combos.forEach(combo => {
      let li = document.createElement("li");
      li.innerHTML = `PEDIDO:  ${combo.carne} + ${combo.papas} + ${combo.bebida}  `;
      const botonCancelar = crearBotonCancelar(combo);
      li.appendChild(botonCancelar);
      combosCreados.appendChild(li);
    });
}

//FUNCION PARA CREAR EL BOTON PARA CANCELAR EL COMBO
function crearBotonCancelar(combo){
    const botonCancelar = document.createElement("button");
    botonCancelar.innerText = "Cancelar";
    botonCancelar.addEventListener("click", () => {
        cancelarCombo(combo);
    })
    return botonCancelar;
}

document.getElementById("formulario-combo").addEventListener("submit", agregarCombo);

/*FUNCION PARA VALIDAR EL COMBO (CON OPERADOR TERNARIO)
function validarCombos(combo) {
    combo.carne == "" ? alert("No puede estar vacio") : alert("Combo creado con exito");
}*/


//IF-ELSE con SweetAlert2
function validarCombos(combo) {  
if(combo.carne == ""){
    const displayBlock = querySelector(".displayNone");
}else{
    Swal.fire({
        title:'Bien hecho',
        text: 'Combo creado con exito',
        icon: 'success',
        confirmButtonText: 'Ok'
    })
}}

//FUNCION PARA SETEAR EL COMBO
function agregarCombo(e){
    e.preventDefault();
  const carne = document.getElementById("carne").value;
  const papas = document.getElementById("papas").value;
  const bebida = document.getElementById("bebida").value;

  const combo = new Combo(nombre, carne, papas, bebida);

  validarCombos(combo);

  const combosEnLocalStorage = JSON.parse(localStorage.getItem(combo));

  if (combosEnLocalStorage == null) {
    localStorage.setItem(nombre, JSON.stringify([combo]));
    mostrarCombos([combo]);
  } else {
    combosEnLocalStorage.push(combo);
    localStorage.setItem(nombre, JSON.stringify(combosEnLocalStorage));
    mostrarCombos(combosEnLocalStorage);
  }
  e.target.reset();
}

//FUNCION PARA CANCELAR COMBO
function cancelarCombo(combo) {
    const combosEnLocalStorage = JSON.parse(localStorage.getItem(nombre));
    const nuevoArray = combosEnLocalStorage.filter(item => item.nombre != combo.nombre);
    localStorage.setItem(nombre, JSON.stringify(nuevoArray));
    mostrarCombos(nuevoArray);
}

//SE CREA EL ARRAY HAMBURGUESAS---
let choices;
const hamburguesas = [
    {
        id: 1,
        carne: "Res",
        papas: "Normales",
        gaseosa: "Fanta"
    },
    {
        id: 2,
        carne: "Pollo",
        papas: "Normales",
        gaseosa: "Agua"
    },
    {
        id: 3,
        carne: "Soja",
        papas: "Normales",
        gaseosa: "Coca-cola"
    }
];

//SE CREA LA FUNCION AddToBurgers PARA PUSHEAR LAS PROPIEDADES Y QUE SALTE EN LA CONSOLA---
function addToBurgers(id, carne, papas, gaseosa){

    hamburguesas.push({
        id,
        carne,
        papas,
        gaseosa,
    })

    return "Creaste con exito la orden" + id;  
}

//SE CREA UNA FUNCTION PARA ASIGNARLE EL ULTIMO ID---
function ultimoID(){
    return hamburguesas.length;
}

//SE CREA UNA FUNCTION LA LISTA DE HAMBURGUESAS PARA LA OPCION 2 QUE ES "VER PEDIDOS"---
function listaHamburguesas(){
    hamburguesas.forEach((hamburguesa) => console.log(hamburguesa.id + " - " + hamburguesa.carne + " - " + hamburguesa.papas + " - " + hamburguesa.gaseosa));
}

//FETCH
document.getElementById('submit').addEventListener("click", ()=>{
    const contenedorResultado = document.getElementById("resultado-busqueda");
    contenedorResultado.innerHTML = "<h3>Otras recomendaciones</h3>";
        fetch('./json/data.json')
                .then(res => res.json())
                .then(combos => {
                    combos.forEach(({carne, papas, bebida}) => {
                        let div = document.createElement("div");
                        div.innerHTML = `   
                            <hr>
                            ${carne && carne} - 
                            ${papas && papas} -
                            ${bebida && bebida}
                            <hr>
                            `;
                            
                            contenedorResultado.appendChild(div);
                    });
                })
    }
)