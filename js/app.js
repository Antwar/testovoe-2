document.addEventListener('DOMContentLoaded', () => {
    const heroBody = document.querySelector('.hero__body');
    const dots = document.querySelectorAll('.hero__dot');
    const accordionItems = document.querySelectorAll('.accordion__item');
    const burger = document.querySelector('.hero__burger');
    const nav = document.querySelector('.hero__nav');
    const body = document.body;
    const navLinks = document.querySelectorAll('.hero__menu-link');
    
    let currentSlide = 0;

    // Смена заднего фона в начале страницы по клику
    function changeSlide(index) {

        heroBody.classList.remove('hero__body--slide-1', 'hero__body--slide-2', 'hero__body--slide-3');
        heroBody.classList.add(`hero__body--slide-${index + 1}`);

        dots.forEach(dot => dot.classList.remove('hero__dot--active'));
        dots[index].classList.add('hero__dot--active');

        currentSlide = index;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            changeSlide(index);
        });
    });

    // Автоматическое закрытие активной карточки вопроса по клику на другой
    accordionItems.forEach((item) => {
        item.addEventListener('toggle', () => {
            if (item.open) {
                accordionItems.forEach((otherItem) => {
                    if (otherItem !== item && otherItem.open) {
                        otherItem.open = false;
                    }
                });
            }
        });
    });

    // Открывание меню
    const toggleMenu = () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        
        body.classList.toggle('no-scroll');
    };

    // Закрытие меню
    const closeMenu = () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
        body.classList.remove('no-scroll');
    };

    if (burger && nav) {
        burger.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        nav.addEventListener('click', (e) => {
            if (e.target === nav) {
                closeMenu();
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

    }

});