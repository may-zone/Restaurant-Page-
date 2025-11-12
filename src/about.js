export function loadAbout() {
  const content = document.getElementById('content');
  content.innerHTML = "";

  const aboutSection = document.createElement('section');
  aboutSection.classList.add('about-section');

  const title = document.createElement('h2');
  title.textContent = "About Us";

  const description = document.createElement('p');
  description.textContent = "Welcome to our restaurant! We’ve been serving delicious meals made with love and fresh ingredients since 2005. Our goal is to bring people together over great food and warm hospitality.";

  const teamTitle = document.createElement('h3');
  teamTitle.textContent = "Our Team";

  const teamText = document.createElement('p');
  teamText.textContent = "Our chefs and staff are passionate about creating unforgettable dining experiences. Every dish is prepared with care and attention to detail.";

  aboutSection.appendChild(title);
  aboutSection.appendChild(description);
  aboutSection.appendChild(teamTitle);
  aboutSection.appendChild(teamText);

  content.appendChild(aboutSection);
}