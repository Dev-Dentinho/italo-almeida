document.querySelector('.btn-download').addEventListener('click', function(e) {
  e.preventDefault();
  
  // Inicia a animação de download
  this.classList.add('downloading');
  
  // Nome do arquivo para download
  const fileName = "Currículo-Italo-Almeida-Front-End.pdf";
  
  // Simula o tempo de carregamento (3.5 segundos conforme a animação)
  setTimeout(() => {
    // Mostra que o download foi concluído
    this.classList.remove('downloading');
    this.classList.add('completed');
    
    // Inicia o download do arquivo
    const link = document.createElement('a');
    link.href = fileName; // Caminho para o arquivo
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Remove o estado de concluído após 2 segundos
    setTimeout(() => {
      this.classList.remove('completed');
    }, 2000);
  }, 3500);
});