// Seleciona todos os elementos de imagem na galeria
const images = document.querySelectorAll('.habilidad img');
// Seleciona o elemento do player de vídeo
const videoPlayer = document.getElementById('videoPlayer');

// Adiciona evento de clique em cada imagem
images.forEach(image => {
  image.addEventListener('click', () => {
    // Obtém o caminho do vídeo a partir do atributo data-video
    const videoSource = image.getAttribute('data-video');
    // Atualiza a fonte do vídeo
    videoPlayer.querySelector('source').src = videoSource;
    // Recarrega o player para refletir a mudança
    videoPlayer.load();
    // Opcional: começa a reproduzir automaticamente
    videoPlayer.play();
  });
});
