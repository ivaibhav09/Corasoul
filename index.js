const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const productContainer = document.querySelector('.product-container');

let currentIndex = 0;
const totalProducts = document.querySelectorAll('.product-item').length;

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalProducts;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalProducts) % totalProducts;
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * 100; // Assuming each product item takes 100% width
  productContainer.style.transform = `translateX(${offset}%)`;
}

// Automatic rotation
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalProducts;
  updateCarousel();
}, 3000); // Adjust rotation speed as needed
