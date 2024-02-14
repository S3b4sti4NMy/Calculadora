let pantallaCalculadora = [];

function actualizarPantalla() {
    document.getElementById('pantallaCalculadora').innerHTML = pantallaCalculadora.join('');
}

function uno() {
    pantallaCalculadora.push(1);
    actualizarPantalla();
}

function dos() {
    pantallaCalculadora.push(2);
    actualizarPantalla();
}

function tres() {
    pantallaCalculadora.push(3);
    actualizarPantalla();
}

function cuatro() {
    pantallaCalculadora.push(4);
    actualizarPantalla();
}

function cinco() {
    pantallaCalculadora.push(5);
    actualizarPantalla();
}

function seis() {
    pantallaCalculadora.push(6);
    actualizarPantalla();
}

function siete() {
    pantallaCalculadora.push(7);
    actualizarPantalla();
}

function ocho() {

    pantallaCalculadora.push(8);
    actualizarPantalla();
}

function nueve() {
    pantallaCalculadora.push(9);
    actualizarPantalla();
}

function cero() {
    pantallaCalculadora.push(0);
    actualizarPantalla();
}

function abrir() {
    pantallaCalculadora.push('(')
    actualizarPantalla();
}

function cerrar() {
    pantallaCalculadora.push(')')
    actualizarPantalla();
}

function borrar() {
    if (pantallaCalculadora.length > 0) {
        pantallaCalculadora.pop();
        actualizarPantalla();
    }
}

function suma() {
    pantallaCalculadora.push('+');
    actualizarPantalla();
}

function menos() {
    pantallaCalculadora.push('-');
    actualizarPantalla();
}

function multiplicar() {
    pantallaCalculadora.push('*');
    actualizarPantalla();
}

function dividir() {
    pantallaCalculadora.push('/');
    actualizarPantalla();
}
function elevar() {
    pantallaCalculadora.push('**');
    actualizarPantalla();
}

function enter() {
    let resultado = eval(pantallaCalculadora.join(''));
    pantallaCalculadora = [resultado];
    actualizarPantalla();
}