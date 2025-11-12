import "./style.css";
import resImg from "./images/res.jpg";


alert("salam ziba !");

const header = document.createElement('header');
header.innerHTML = `
<nav>
<button id="home"> Home </button>
<button id="menu"> Menu </button>
<button id="about"> About us </button>
</nav>

`
document.body.prepend(header);

const content = document.createElement('div');
content.id='content';
document.body.appendChild(content);

const contentDiv = document.getElementById('content');

const contentImg = document.createElement('img');
contentImg.src = resImg;
contentImg.alt = "Restaurant image of benjamin cheng in unsplash.com";
contentDiv.appendChild(contentImg);

