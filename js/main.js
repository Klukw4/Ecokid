// Можно добавить JS-анимации, слайдеры или интерактивные элементы
console.log("Сайт Ecokid загружен!");
// Бургер-меню
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
