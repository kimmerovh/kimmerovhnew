// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Плавная прокрутка до секции при клике на ссылку
    document.querySelectorAll('header nav a').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Анимация кнопки при наведении
    const btn = document.querySelector('.btn');
    if (btn) {
        btn.addEventListener('mouseover', () => {
            btn.style.boxShadow = '0 10px 20px rgba(255, 87, 34, 0.4)';
        });

        btn.addEventListener('mouseout', () => {
            btn.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.2)';
        });
    }

    // Анимация карточек при прокрутке в область видимости
    const cards = document.querySelectorAll('.card');
    const animateCard = () => {
        const windowHeight = window.innerHeight;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < windowHeight * 0.8) {
                card.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateCard);
    animateCard(); // Запускаем анимацию при загрузке страницы

    // Стили для анимации карточек
    document.styleSheets[0].insertRule(`
        .card.animate {
            transform: scale(1.02);
            transition: transform 0.5s ease;
        }
    `, 0);
});
