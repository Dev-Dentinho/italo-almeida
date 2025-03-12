// Função para observar o scroll e aplicar o efeito de animação quando o usuário rolar
const imageSection = document.querySelector('.image-section img');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      imageSection.style.animation = 'slideIn 1s forwards'; // Reaplica a animação
    }
  });
}, { threshold: 0.3 }); // A animação é acionada quando 30% da imagem estiver visível

observer.observe(imageSection);

// Reaplicar o efeito quando o usuário voltar para o topo da página
window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    imageSection.style.animation = 'none'; // Remove a animação
    setTimeout(() => {
      imageSection.style.animation = 'slideIn 1s forwards'; // Reinicia a animação
    }, 50);
  }
});