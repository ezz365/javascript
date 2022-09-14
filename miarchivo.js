//CLASS HAMBURGER
class Hamburger {
    constructor(titulo, imagen, descripcion) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}

//SE CREAN CONSTANTES HAMBURGERS
const hamburger1 = new Hamburger("Hamburguesa 1", "img/cardburger1.png", "Veni a disfrutar de una rica hamburguesa a Errantes Cerveceria")
const hamburger2 = new Hamburger("Hamburguesa 2", "img/cardburger2.png", "Veni a disfrutar de una rica hamburguesa a Errantes Cerveceria" )
const hamburger3 = new Hamburger("Hamburguesa 3", "img/cardburger3.png", "Veni a disfrutar de una rica hamburguesa a Errantes Cerveceria" )

//SE CREA EL ARRAY
const hamburgers = []

//SE PUSHEAN LAS CONST HAMBURGER DENTRO DEL ARRAY HAMBURGERS
hamburgers.push(hamburger1);
hamburgers.push(hamburger2);
hamburgers.push(hamburger3);

//FUNCION MOSTRAR HAMBURGUESAS EN HTML
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
    cardHamburgers.append(divHamburger);
  })
}  

mostrarHamburger(hamburgers);

console.log(mostrarHamburger);

/*
//ARRAY
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

//SWITCH
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
//WHILE
}while(choices !== '0');

//FUNCTION
function addToBurgers(id, carne, papas, gaseosa){

    hamburguesas.push({
        id,
        carne,
        papas,
        gaseosa,
    })

    return "Creaste con exito la orden" + id;  
}

function ultimoID(){
    return hamburguesas.length;
}

function listaHamburguesas(){
    hamburguesas.forEach((hamburguesa) => console.log(hamburguesa.id + " - " + hamburguesa.carne + " - " + hamburguesa.papas + " - " + hamburguesa.gaseosa));
}
*/