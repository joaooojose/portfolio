// Faz cada seção aparecer suavemente quando entra na tela
const secoes = document.querySelectorAll('section');

secoes.forEach(secao => secao.classList.add('aparecer'));

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visivel');
    }
  });
}, { threshold: 0.15 });

secoes.forEach(secao => observador.observe(secao));