const slider = document.querySelector('.itens');
let mouseAtivo = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  mouseAtivo = true;
  slider.classList.add('ativo');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  mouseAtivo = false;
  slider.classList.remove('ativo');
});

slider.addEventListener('mouseup', () => {
  mouseAtivo = false;
  slider.classList.remove('ativo');
});

slider.addEventListener('mousemove', (e) => {
  if(!mouseAtivo) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const andar = (x - startX);
  slider.scrollLeft = scrollLeft - andar;
  console.log(andar);
});
