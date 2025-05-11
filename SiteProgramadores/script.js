document.querySelectorAll('.seta').forEach(seta => {
  seta.addEventListener('click', () => {
    const card = seta.closest('.card');
    card.classList.toggle('expandido');
  });
});