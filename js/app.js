document.addEventListener('DOMContentLoaded', () => {
    const heroBody = document.querySelector('.hero__body');
    const dots = document.querySelectorAll('.hero__dot');
    
    let currentSlide = 0;

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

});