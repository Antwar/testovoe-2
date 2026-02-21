document.addEventListener('DOMContentLoaded', () => {
    const heroBody = document.querySelector('.hero__body');
    const dots = document.querySelectorAll('.hero__dot');
    const accordionItems = document.querySelectorAll('.accordion__item');
    
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

});