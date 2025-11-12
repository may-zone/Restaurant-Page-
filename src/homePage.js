import resImg from "./images/res.jpg";

export function homePage() {
  const content = document.getElementById('content');
  content.innerHTML = ""; 

  const hometittle = document.createElement('h2');
  hometittle.textContent = "this is a Tittle";

  const contentImg = document.createElement('img');
  contentImg.src = resImg;
  contentImg.alt = "Restaurant image of benjamin cheng in unsplash.com";

  const imgBullshits = document.createElement('p');
  imgBullshits.textContent = "here is some data about restaurant ";

  content.appendChild(hometittle);
  content.appendChild(contentImg);
  content.appendChild(imgBullshits);
}