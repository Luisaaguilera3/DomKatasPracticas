//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
document.getElementById('btnToClick').addEventListener('click', function(event) {
    console.log(event);
});


//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        console.log(input.value);
    });

    // Añadir evento input
    input.addEventListener('input', function() {
        console.log(input.value);
    });
});


//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        console.log(input.value);
    });
    input.addEventListener('input', function() {
        console.log(input.value);
    });
});