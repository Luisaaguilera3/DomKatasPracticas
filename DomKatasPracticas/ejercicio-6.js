//Elimina el elemento que tenga la clase .fn-remove-me

const elementToRemove = document.querySelector('.fn-remove-me')
if (elementToRemove) {
    elementToRemove.remove();
}

console.log(elementToRemove);