
//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const button = document.querySelector('.showme');
console.log(button);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1 = document.getElementById('pillado')
console.log(h1)

//1.3 Usa querySelector para mostrar por consola todos los p
const p = document.querySelectorAll('p')
console.log(p)

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
document.addEventListener("DOMContentLoaded", function() {
    const pokemonElements = document.querySelectorAll('.pokemon');
    pokemonElements.forEach(element => {
        console.log(element);
    });
});

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
document.addEventListener("DOMContentLoaded", function() {
    const testMeElements = document.querySelectorAll('[data-function="testMe"]');
    testMeElements.forEach(element => {
        console.log(element);
    });
});

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
const testMeElements = document.querySelectorAll('[data-function="testMe"]');
    
if (testMeElements.length >= 3) {
    console.log(testMeElements[2]);
} else {
    console.log("No hay suficientes elementos con el atributo data-function='testMe'.");
}