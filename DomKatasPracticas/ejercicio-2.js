//1.1 Inserta dinamicamente en un html un div vacio con javascript.
document.addEventListener("DOMContentLoaded", function() {
    const MyNewDiv = document.querySelectorAll("[NewDiv]");
    MyNewDiv.forEach(element => {
        element.innerHTML = '<div></div>';
    });
    console.log(MyNewDiv)
});

//1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
document.addEventListener("DOMContentLoaded", function() {
    const MyNewP = document.querySelectorAll("[NewP]");
    MyNewP.forEach(element => {
        element.innerHTML = '<p></p>';
    });
    console.log(MyNewP)
});

//1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const newDiv = document.createElement('div');

for (let i = 0; i < 6; i++) {
        const p = document.createElement('p');
        p.textContent = `Párrafo ${i + 1}`;
        newDiv.appendChild(p);
    }

const insertLocation = document.querySelector('.fn-insert-here');

if (insertLocation) {
        insertLocation.appendChild(newDiv);
    }
    console.log(newDiv)

//1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!
document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.createElement("p");
    paragraph.textContent = "¡Soy dinámico!";
    document.body.appendChild(paragraph);
    console.log(paragraph);
});


//1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
document.addEventListener("DOMContentLoaded", function() {
    const h2Element = document.querySelector("h2.fn-insert-here");
    if (h2Element) {
        h2Element.textContent = "Wubba Lubba dub dub";
    }
    console.log(h2Element)
});


//1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');

apps.forEach(app => {
    const li = document.createElement('li');
    li.textContent = app;
    ul.appendChild(li);
});

document.querySelectorAll('.fn-insert-here').forEach(element => {
    element.appendChild(ul.cloneNode(true));
});

//1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
document.addEventListener('DOMContentLoaded', function() {
    var elementsRemove = document.querySelectorAll('.fn-remove-me');
  
    elementsRemove.forEach(function(element) {
        element.remove();
    });
    console.log(elementsRemove);
});

//1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
document.addEventListener('DOMContentLoaded', function() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Voy en medio!';

    const firstDiv = document.querySelector('div');
    const secondDiv = firstDiv.nextElementSibling;

    firstDiv.parentNode.appendChild(newParagraph);
    firstDiv.parentNode.appendChild(secondDiv);

    console.log(newParagraph);
});

//1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const pInsert = document.querySelectorAll('div.fn-insert-here');
        
for (let i = 0; i < pInsert.length; i++) {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Voy dentro!';
    pInsert[i].appendChild(newParagraph);
}