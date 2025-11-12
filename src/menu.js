import pizzaImg from "./images/pizza.svg"
import sandwichImg from "./images/sandwich.svg"
import tacoImg from "./images/taco.svg"

const content = document.getElementById('content');
content.innerHTML = "";


const menuSide = document.createElement('div');
menuSide.classList.add('menuSide');
content.appendChild(menuSide);

function createCard (imgSrc, title,description, price ){
    const item =document.createElement('div');
    item.classList.add('item');

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = title;

    const h3 =document.createElement('h3');
    h3.textContent = title ;

    const p = document.createElement('p');
    p.textContent = description;

    const span = document.createElement('span')
    span.textContent = price;

    item.appendChild(img);
    item.appendChild(h3);
    item.appendChild(p);
    item.appendChild(span);

    return item;
};

const pizza = createCard (pizzaImg, 'Pizza Pepperoni','Classic cheese and tomato with spicy salami' , '$8.99' );
const taco = createCard (tacoImg, 'Taco',  'A delicious fusion of Mexican spices and soft bread, filled with seasoned beef and fresh veggies.','$4.99' );
const sandwich = createCard (sandwichImg, 'Sandwich','Crispy bread, tender beef, and taco flavors in every bite' , '$6.99' );

menuSide.appendChild(pizza);
menuSide.appendChild(taco);
menuSide.appendChild(sandwich);
