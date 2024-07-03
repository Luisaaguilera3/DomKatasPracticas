//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul = document.createElement('ul');
countries.forEach(country => {
    const li = document.createElement('li');
    li.textContent = country;
    ul.appendChild(li);
});

document.querySelectorAll('.fn-insert-here').forEach(element => {
    element.appendChild(ul.cloneNode(true));
});

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
document.addEventListener('DOMContentLoaded', function() {
    const elementToRemove = document.querySelectorAll('.fn-remove-me');
    elementToRemove.forEach(function(element){
        element.remove();
    });
    console.log(elementToRemove);
    });


//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const printHereDiv = document.querySelector('div[data-function="printHere"]');

const ulElement = document.createElement('ul');

cars.forEach(car => {
    const liElement = document.createElement('li');
    liElement.textContent = car;
    ulElement.appendChild(liElement);
});

printHereDiv.appendChild(ulElement);
console.log(ulElement);


//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countriesImg = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

document.addEventListener("DOMContentLoaded", () => {
    // Datos de los países con imágenes
    const countriesImg = [
        { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
        { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
        { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
        { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
        { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
    ];

    // Selecciona el elemento donde se van a insertar los divs
    const container = document.querySelector('div[data-function="printHere"]');

    // Itera sobre cada elemento del array y crea el HTML correspondiente
    countriesImg.forEach(country => {
        // Crea un nuevo div
        const div = document.createElement('div');

        // Crea un nuevo h4 para el título
        const h4 = document.createElement('h4');
        h4.textContent = country.title;

        // Crea una nueva imagen
        const img = document.createElement('img');
        img.src = country.imgUrl;

        // Añade el h4 y la imagen al div
        div.appendChild(h4);
        div.appendChild(img);

        // Añade el div al contenedor
        container.appendChild(div);
    });

    // Remueve el párrafo con la clase .fn-remove-me
    const paragraphToRemove = document.querySelector('.fn-remove-me');
    if (paragraphToRemove) {
        paragraphToRemove.remove();
    }
});


//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
   // Crear el botón de eliminar
   const removeButton = document.createElement('button');
   removeButton.textContent = 'Eliminar último elemento';
   document.body.appendChild(removeButton);

   // Añadir el evento click al botón para eliminar el último div
   removeButton.addEventListener('click', () => {
       const divs = container.querySelectorAll('div');
       if (divs.length > 0) {
           container.removeChild(divs[divs.length - 1]);
       }
   });

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
        // Crear el botón de eliminar para este div
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar este elemento';
        
        // Añadir el evento click al botón para eliminar el div
        removeButton.addEventListener('click', () => {
            container.removeChild(div);
        });

        div.appendChild(h4);
        div.appendChild(img);
        div.appendChild(removeButton);
        container.appendChild(div);
   
    const paragraphToRemove = document.querySelector('.fn-remove-me');
    if (paragraphToRemove) {
        paragraphToRemove.remove();
    }

s