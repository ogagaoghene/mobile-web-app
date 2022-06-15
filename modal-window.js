const openModalButtons = document.querySelectorAll('.button-styles-2');
const closeModalButtons = document.querySelectorAll('.button-styles-2');
const cards_container = document.getElementById("work-section");

let cards = [
  {
    img: '/assets/1.png',
    project_title: 'TONIC',
    company: 'CANOPY',
    dev_title: 'BackEndDev',
    date: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'Ruby on rails', 'css', 'Javascript']
  },
  {
    img: '/assets/1.png',
    project_title: 'TONIC',
    company: 'CANOPY',
    dev_title: 'BackEndDev',
    date: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'Ruby on rails', 'css', 'Javascript']
  }
];

function loadCards() {
  for (let card_index = 0; card_index < cards.length; ++card_index) {
    let card_html = `<div class="work-section-card">
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
      <li><a href="#" class="anchorstyles">${cards[card_index].skills[0]}</a></li>
      <li><a href="#" class="anchorstyles">${cards[card_index].skills[0]}</a></li>
      <li><a href="#" class="anchorstyles">${cards[card_index].skills[0]}</a></li>
    </ul>
    <div class="break"></div>
    <ul>
      <li><a href="#" class="button-styles">See Project</a></li>
    </ul>
  </div>
</div>`
    console.log(card_html);
    cards_container.innerHTML = card_html;
  }
}
/** Implement function here  */

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector( /**required value should be added here */);
    openModal(modal);
  })
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    /** Add whatever is required here to implement this requirement */
  })
})

const openModal = (modal) => {
  if (modal == null) return;
  modal.classList.add('active');
  // add whatever is required 
}

const closeModal = (modal) => {
  if (modal == null) return
  modal.classList.remove('active');
  // add whatever is required
}

loadCards();
