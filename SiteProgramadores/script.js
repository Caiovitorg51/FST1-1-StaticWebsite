document.querySelectorAll('.seta').forEach(seta => {
  seta.addEventListener('click', () => {
    const card = seta.closest('.card');
    card.classList.toggle('expandido');
  });
});

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});