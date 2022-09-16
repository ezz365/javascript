//***SE CREA LA CLASS HAMBURGER
class Hamburger {
    constructor(titulo, imagen, descripcion) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}

//***SE CREAN CONSTANTES HAMBURGERS
const hamburger1 = new Hamburger("Hamburguesa 1", "img/cardburger1.png", "Veni a disfrutar de una rica hamburguesa a Errantes Cerveceria")
const hamburger2 = new Hamburger("Hamburguesa 2", "img/cardburger2.png", "Veni a disfrutar de una rica hamburguesa a Errantes Cerveceria" )
const hamburger3 = new Hamburger("Hamburguesa 3", "img/cardburger3.png", "Veni a disfrutar de una rica hamburguesa a Errantes Cerveceria" )

//***SE CREA EL ARRAY
const hamburgers = []

//***SE PUSHEAN LAS CONST HAMBURGER DENTRO DEL ARRAY HAMBURGERS
hamburgers.push(hamburger1);
hamburgers.push(hamburger2);
hamburgers.push(hamburger3);

//***FUNCION MOSTRAR HAMBURGUESAS EN HTML
function mostrarHamburger(hamburgers) {

  const cardHamburgers = document.querySelector(".card-hamburgers");
  cardHamburgers.innerHTML = "";
  //PARA CADA UNA DE LAS CARDS
  hamburgers.forEach(hamburger => {
    const divHamburger = document.createElement("div"); 
    divHamburger.classList.add("hamburger");
    divHamburger.innerHTML = `
      <img src="${hamburger.imagen}" alt="${hamburger.titulo}">
      <h3>${hamburger.titulo}</h3>
      <p>Descripción: ${hamburger.descripcion}</p>
    `;
    //SE CREA EL BOTON ADICIONAL
    const botonAdicional = crearAdicional(hamburger)
    divHamburger.appendChild(botonAdicional);
    //SE CREA EL DIV
    cardHamburgers.appendChild(divHamburger);
  })
}  

mostrarHamburger(hamburgers);

//---SE CREA EL ARRAY HAMBURGUESAS---
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

//***SE CREA EL BOTON "CREAR COMBO" Y SE METE EL PROMPT DENTRO DE UN EVENTO CON CLICK PARA PODER FORMULAR EL PEDIDO CON EXITO
function crearAdicional(hamburger){
    const button = document.createElement("button"); //se crea un <button>
    button.innerText = "Crear combo"; //se pone el contenido del button
    button.addEventListener("click",() => {
            do{
        choices = prompt(
            "Elige la opción: \n1. Agregar hamburguesa nueva \n2. Ver hamburguesas \n0. Salir "
        );
        switch(choices){
            case '1':
                    const carne = (prompt("Escribe el nombre de la carne: \n- Res \n- Pollo \n- Soja"));
                    const papas = (prompt("Escribe el nombre de las papas fritas: \n- Normales \n- Cheddar \n- Bacon"));
                    const gaseosa = (prompt("Escribe el nombre de la bebida: \n- Coca-cola \n- Agua \n- Fanta"));
                    const id = ultimoID() + 1;
                    addToBurgers(id, carne, papas, gaseosa)
                    console.log("Creaste el pedido con exito");
                break;
            case '2':
                    listaHamburguesas();
                break;
            case '0':
                    alert('Muchas gracias');
                    console.log('Muchas gracias');
                break;
            default:
                    alert("Opción incorrecta. Por favor ingrese un número del 0 al 2");
                    console.log('Opción incorrecta');
                break;   
        }
    }while(choices !== '0');   
    })
    return button;
}

//---SE CREA LA FUNCION AddToBurgers PARA PUSHEAR LAS PROPIEDADES Y QUE SALTE EN LA CONSOLA---
function addToBurgers(id, carne, papas, gaseosa){

    hamburguesas.push({
        id,
        carne,
        papas,
        gaseosa,
    })

    return "Creaste con exito la orden" + id;  
}

//---SE CREA UNA FUNCTION PARA ASIGNARLE EL ULTIMO ID---
function ultimoID(){
    return hamburguesas.length;
}

//---SE CREA UNA FUNCTION LA LISTA DE HAMBURGUESAS PARA LA OPCION 2 QUE ES "VER PEDIDOS"---
function listaHamburguesas(){
    hamburguesas.forEach((hamburguesa) => console.log(hamburguesa.id + " - " + hamburguesa.carne + " - " + hamburguesa.papas + " - " + hamburguesa.gaseosa));
}