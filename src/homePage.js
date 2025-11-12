import resImg from "./images/res.jpg";

 export function homePage () {
const header = document.createElement('header');
header.innerHTML = `
<nav>
<button id="home"> Home </button>
<button id="menu"> Menu </button>
<button id="about"> About us </button>
</nav>

`
const content = document.createElement('div');
content.id='content';
document.body.appendChild(content);

const contentDiv = document.getElementById('content');
const hometittle = document.createElement('h2');
hometittle.textContent = "this is a Tittle";

const contentImg = document.createElement('img');
contentImg.src = resImg;
contentImg.alt = "Restaurant image of benjamin cheng in unsplash.com";

const imgBullshits = document.createElement('p');
imgBullshits.textContent = "here is some data about restaurant ";

document.body.prepend(header);
contentDiv.appendChild(hometittle);
contentDiv.appendChild(contentImg);
content.appendChild(imgBullshits);

}