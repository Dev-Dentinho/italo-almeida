// Desabilitar o clique direito
document.addEventListener('contextmenu', function(event) {
  event.preventDefault(); // Impede o menu de contexto (clique direito)
  alert("Ação não permitida. Não tente copiar o conteúdo!");
});

// Desabilitar a seleção de texto
document.addEventListener('selectstart', function(event) {
  event.preventDefault(); // Impede a seleção de texto
});

// Impedir o uso de F12 (DevTools) e outras ferramentas de desenvolvedor
document.addEventListener('keydown', function(event) {
  // Bloqueia as teclas F12 e Ctrl+Shift+I (ferramentas de desenvolvedor)
  if (event.keyCode === 123 || (event.ctrlKey && event.shiftKey && event.keyCode === 73)) {
    alert("O uso de ferramentas de desenvolvedor é Restrito!");
    event.preventDefault(); // Bloqueia a ação
  }
});

// Impedir o acesso ao código-fonte
document.addEventListener('keydown', function(event) {
  // Bloqueia o atalho Ctrl+U (visualizar código-fonte)
  if (event.ctrlKey && event.keyCode === 85) {
    alert("A visualização do código-fonte não é permitida!");
    event.preventDefault();
  }
});

// Desabilitar a funcionalidade de arrastar e soltar
document.addEventListener('dragstart', function(event) {
  event.preventDefault();
});

let lastRequestTime = 0;
document.addEventListener('mousemove', function(event) {
  const currentTime = Date.now();
  if (currentTime - lastRequestTime < 100) { // Evita solicitações rápidas e excessivas
    alert("Ação suspeita detectada. Seu comportamento está sendo Monitorado.");
    window.location.href = "https://www.seusite.com/erro";
  }
  lastRequestTime = currentTime;
});

window.onresize = function() {
  alert("Não tente manipular a visualização do site!");
  window.location.reload();
};