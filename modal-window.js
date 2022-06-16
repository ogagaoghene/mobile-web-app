const cardsContainer = document.getElementById('work-section');

const cards = [
  {
    img: 'assets/1.png',
    project_title: 'TONIC',
    company: 'CANOPY',
    dev_title: 'BackEndDev',
    date: '2015',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente quod corporis voluptate praesentium adipisci nisi fuga quaerat.',
    skills: ['html', 'Ruby on rails', 'css', 'Javascript'],
  },
  {
    img: 'assets/2.png',
    project_title: 'TONIC',
    company: 'CANOPY',
    dev_title: 'BackEndDev',
    date: '2015',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente quod corporis voluptate praesentium adipisci nisi fuga quaerat.',
    skills: ['html', 'Ruby on rails', 'css', 'Javascript'],
  },
  {
    img: 'assets/3.png',
    project_title: 'TONIC',
    company: 'CANOPY',
    dev_title: 'BackEndDev',
    date: '2015',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente quod corporis voluptate praesentium adipisci nisi fuga quaerat.',
    skills: ['html', 'Ruby on rails', 'css', 'Javascript'],
  },
  {
    img: 'assets/4.png',
    project_title: 'TONIC',
    company: 'CANOPY',
    dev_title: 'BackEndDev',
    date: '2015',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente quod corporis voluptate praesentium adipisci nisi fuga quaerat.',
    skills: ['html', 'Ruby on rails', 'css', 'Javascript'],
  },
];

function loadCards() {
  let cardHtml = '';

  for (let cardIndex = 0; cardIndex < cards.length; cardIndex += 1) {
    const html = `<div class="row">

    <div class="left_div">
      <img src="${cards[cardIndex].img}" alt="Nature image" />
    </div>

    <div class="right_div">
      <h2>${cards[cardIndex].project_title}</h2>
      <div class="break">&nbsp;</div>
      <span>
      <strong>
        ${cards[cardIndex].company} 
      </strong>&nbsp; </span> &nbsp;  <img src="assets/dot.png" alt="" /><span>&nbsp; ${cards[cardIndex].dev_title} &nbsp; </span><img src="assets/dot.png" alt="" />&nbsp; <span>${cards[cardIndex].date}</span>
      <p>${cards[cardIndex].description}</p>
      <ul>
        <li><a href="#" class="anchorstyles">${cards[cardIndex].skills[0]}</a></li>
        <li><a href="#" class="anchorstyles">${cards[cardIndex].skills[1]}</a></li>
        <li><a href="#" class="anchorstyles">${cards[cardIndex].skills[2]}</a></li>
        <li><a href="#" class="anchorstyles">${cards[cardIndex].skills[3]}</a></li>
      </ul>
      <div class="break"></div>
      
    <div>
      <button id="button-styles" class="button-styles">See Projects</button>
    </div>

  </div>
</div>`;
    cardHtml += html;
  }
  cardsContainer.innerHTML = cardHtml;
}

loadCards();

function loadModal(id) {
  id = 2;
  const project = cards[id];

  const modalHtml = `
  <div classs="wrapper">
    <div class="modal-body">
    <div><span class="title">${project.project_title} </span> <span><i class="fas fa-times close-button "></i></span></div>
      
    <span class="sect-canopy">${project.company}</strong>&nbsp;</span> &nbsp; <img src="assets/dot.png" alt="dot icon" /> &nbsp; <span class="backend-dev">&nbsp; ${project.dev_title} &nbsp; </span>
    <img src="assets/dot.png" alt="" />&nbsp; ${project.date}<span></span>
      <div class="pic">
        <img src="${project.img}" alt="Nature image" />
      </div>
      <div class="right-container">
      <p class="text-description">${project.description}</p>
      <div class="skills-list row">
        <ul>
          <li><a href="#" class="anchorstyles">html</a></li>
          <li><a href="#" class="anchorstyles">css</a></li>
          <li><a href="#" class="anchorstyles">javascript</a></li>
        </ul>
        <div class="button-frame">
          <button class="button-styles">See Live <i class="fa-regular fa-circle-up"></i></button>
          <button class="button-styles">See Source <i class="fab fa-github"></i></button>
       </div>
       </div>
      </div>
    </div>
  </div>`;
  const bodyContainer = document.getElementById('modal');
  bodyContainer.innerHTML = modalHtml;
}

loadModal();

const modal = document.querySelector('.modal');
const trigger = document.querySelectorAll('.button-styles');
const closeButton = document.querySelector('.close-button');

function toggleModal() {
  modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.forEach((element) => {
  element.addEventListener('click', toggleModal);
});

closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);