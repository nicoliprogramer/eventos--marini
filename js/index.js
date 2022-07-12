const worthOne = 40000;
const worthTwo = 73000;

const password = (usuario) => {
    let pass = "";

    while (pass == "" || pass == null) {
        pass = prompt(`Ingrese su Contraseña ${usuario}`);


    }

    alert(`Registrado con Éxito ${usuario}!`)

}

const registrar = () => {

    let usuario = "";

    while (usuario == "" || usuario == null) {

        usuario = prompt(`Ingrese un Usuario`)

    }
    password(usuario);

}


const bienvenido = () => {
    alert("¡¡Bienvenido colega!!")
    alert("Esta es nuestra plataforma");

    let respuesta = prompt(`¿Qué servicios ofrecemos?
    Venta de Departamentos
    Venta de Coches
    `);

    while (respuesta.toLowerCase() != "venta de departamentos" && respuesta != 1) {

        alert("Usted no pertenece acá");

        respuesta = prompt(`¿Qué servicios ofrecemos?
    
             Venta de Departamentos
             Venta de coches
            `);


    }

}

function oneDept(adults, kids) {
    let total = adults + kids;
    if (adults <= 0 && kids !== 0) {
        alert('No puede alquilar sin adultos');
    }
    else if (total > 6) {
        alert('Sobrepasa la cantidad (6 personas), contrate dos si desea mas capacidad');
    }
    else if (total <= 6) {
        alert(`El total a pagar es: $${worthOne}`);
    }
    else (total <= 6)
    { register(); }

    return total;
}

function twoDept(adults, kids) {
    let total = adults + kids;
    if (adults <= 0 && kids !== 0) {
        alert('No se puede alquilar sin adultos');
    }
    else if (total > 12) {

        alert('Sobrepasa el limite de personas máximo por departamento');
    }
    else if (total <= 12) {
        alert(`El total a pagar es: $${worthTwo}`);
    }
    else (total <= 12)
    { main(); }
    return total;
}

function showTotal(total) {
    if (total <= 7 || total <= 13) {
        alert(`El total de personas ingresadas es : ${total}`);
    }
}

function showMenu(menu) {
    let userZone = prompt('En que zona quiere el dpto?');
    alert(`en ${userZone.toUpperCase()} tenemos disponible...`);

    let options = prompt(`Zona ${userZone.toUpperCase()}, elija la opción que desea.\n \n 1. Departamento (hasta 3 personas) \n 2. Departamento (hasta 6 personas) `);
    return options;
}

function quotation() {
    let selectedOption = showMenu();
    while (selectedOption !== '') {
        if (!isNaN(selectedOption !== '')) {
            let adults = parseInt(prompt('Ingrese el número de adultos'));
            let kids = parseInt(prompt('Ingrese el número de niños'));
            selectedOption = parseInt(selectedOption);


            switch (selectedOption) {
                case 1:
                    let totalOne = oneDept(adults, kids);
                    showTotal(totalOne);
                    break;
                case 2:
                    let totalTwo = twoDept(adults, kids);
                    showTotal(totalTwo);
                    break;
                default:
                    alert('Ingrese la opción 1, 2 o 3 para continuar');
                    break;
            }
        } else {
            alert('Opción no válida');
        }
        selectedOption = showMenu();
    }
}

const openSpeak = () => {
    let idioma = prompt("ingrese su idioma dominante");

    while (idioma != "español") {

        idioma = prompt("Ingrese el idioma correcto")
    }

}

const main = () => {
    openSpeak();
    bienvenido();
    registrar();
    quotation();

}
main();


