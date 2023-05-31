function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  // pegar a tag img
  const img = document.querySelector('#profile img');

  // substituir a imagem
  if (html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png');
    img.setAttribute(
      'alt',
      'Foto em preto e branco de Alberto Araujo sorrindo, com camisa preta, usando óculos escuros',
    );
  } else {
    // se não estiver light mode, adicionar a imagem normal
    img.setAttribute('src', './assets/avatar.png');
    img.setAttribute(
      'alt',
      'Foto em preto e branco de Alberto Araujo sorrindo, com camisa preta',
    );
  }
}
