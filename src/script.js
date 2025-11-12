import "./style.css";
import { homePage } from "./homePage.js";
import { loadMenu } from "./menu.js";


alert("salam ziba !");
const header = document.createElement('header');
header.innerHTML = `
  <nav>
    <button id="home">Home</button>
    <button id="menu">Menu</button>
    <button id="about">About us</button>
  </nav>
`;
document.body.prepend(header);

const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);

homePage();

document.getElementById('menu').addEventListener('click',loadMenu);
document.getElementById('home').addEventListener('click',homePage)


