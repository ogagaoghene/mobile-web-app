const closeModalButtons = document.querySelectorAll('.button-styles-2');
const cards_container = document.getElementById("work-section");

let cards = [
  {
    img: 'assets/1.png',
    project_title: 'TONIC',
    company: 'CANOPY',
    dev_title: 'BackEndDev',
    date: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'Ruby on rails', 'css', 'Javascript']
  },
  {
    img: 'assets/2.png',
    project_title: 'TONIC',
    company: 'CANOPY',
    dev_title: 'BackEndDev',
    date: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'Ruby on rails', 'css', 'Javascript']
  }
  ,
  {
    img: 'assets/3.png',
    project_title: 'TONIC',
    company: 'CANOPY',
    dev_title: 'BackEndDev',
    date: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'Ruby on rails', 'css', 'Javascript']
  }
  ,
  {
    img: 'assets/4.png',
    project_title: 'TONIC',
    company: 'CANOPY',
    dev_title: 'BackEndDev',
    date: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'Ruby on rails', 'css', 'Javascript']
  }
];

function loadCards() {
  let card_html = ''; /** created an empty string as placeholder */

  for (let card_index = 0; card_index < cards.length; card_index++) {
    let html = `<div class="work-section-card">
  <div class="flex-left">
    <img src="${cards[card_index].img}" alt="Nature image" />
  </div>
  <div class="flex-right">
    <h2>${cards[card_index].project_title}</h2>
    <div class="break">&nbsp;</div>
    <span>
    <strong>${cards[card_index].company} 
    </strong>&nbsp; </span> &nbsp;  <img src="assets/dot.png" alt="" /><span>&nbsp; ${cards[card_index].dev_title} &nbsp; </span><img src="assets/dot.png" alt="" />&nbsp; <span>${cards[card_index].date}</span>
    <p>
     ${cards[card_index].description}
    </p>
    <ul>
      <li><a href="#" class="anchorstyles">${cards[card_index].skills[0]}</a></li>
      <li><a href="#" class="anchorstyles">${cards[card_index].skills[1]}</a></li>
      <li><a href="#" class="anchorstyles">${cards[card_index].skills[2]}</a></li>
      <li><a href="#" class="anchorstyles">${cards[card_index].skills[3]}</a></li>
    </ul>
    <div class="break"></div>
    
    <div>
      <button id="button-styles" class="button-styles">See Projects</button>
    </div>

  </div>
</div>`
    card_html+=html;
  }
  cards_container.innerHTML = card_html;
}

loadCards();

function loadModal(id){
  id = 0;
  let project = cards[id];
  //let moodal = '';
  let modal_html = `
  <div class="modal-header">
  <div class="work-section-card">
  <div class="modal-head">
    <div class="title">${project.project_title}</div>
    <i class="fas fa-times close-button"></i>
    </div>
    <div class="flex-left">
    <div>
      <span>
        <strong>${project.company}
        </strong>&nbsp; </span> &nbsp; <img src="assets/dot.png" alt="" /><span>&nbsp; ${project.dev_title} &nbsp; </span><img
        src="assets/dot.png" alt="" />&nbsp; ${project.date}<span></span>
        </div>
      <img src="${project.img}" alt="Nature image" />
    </div>
      <div class="dec-container">
      <div class="desc">
      <p>
        ${project.description}
      </p>
      </div>
      <div class="skills">
      <ul class="frame">
        <li><a href="#" class="anchorstyles">html</a></li>
        <li><a href="#" class="anchorstyles">CSS</a></li>
        <li><a href="#" class="anchorstyles">JavaScript</a></li>
      </ul>
      <div class="break"></div>
      <div class="button-frame">
        <button class="button-styles">See Live <i class="fa-regular fa-circle-up"></i></button>
        <button class="button-styles">See Source <i class="fab fa-github"></i></button>
      </div>
    </div>
    </div>
  </div>`
let body_container = document.getElementById("modal");
body_container.innerHTML = modal_html;
}
loadModal();

const modal = document.querySelector(".modal");
const trigger = document.querySelectorAll(".button-styles");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.forEach(element => {
  element.addEventListener("click", toggleModal);
});

closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);