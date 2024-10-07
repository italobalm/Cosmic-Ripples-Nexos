// Adiciona um evento de mouse sobre os botões para melhorar a interação
// Captura os elementos do carrossel
const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;

// Função para atualizar a posição dos itens no carrossel
const updateCarousel = () => {
  items.forEach((item, index) => {
    item.classList.remove('selected', 'prev', 'next');
    
    // Centraliza o item selecionado
    if (index === currentIndex) {
      item.classList.add('selected');
    } 
    // Define o item anterior
    else if (index === currentIndex - 1 || (currentIndex === 0 && index === items.length - 1)) {
      item.classList.add('prev');
    } 
    // Define o item seguinte
    else if (index === currentIndex + 1 || (currentIndex === items.length - 1 && index === 0)) {
      item.classList.add('next');
    }
  });
};

// Evento de clique no botão "Anterior"
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

// Evento de clique no botão "Próximo"
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

// Inicializa o carrossel
updateCarousel();

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)'; // Aumenta o tamanho do botão
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)'; // Retorna ao tamanho original
    });
});
