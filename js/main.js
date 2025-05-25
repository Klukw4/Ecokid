// Можно добавить JS-анимации, слайдеры или интерактивные элементы
console.log("Сайт Ecokid загружен!");
// Бургер-меню
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  } else {
    console.warn("Элементы бургер-меню не найдены");
  }
});
