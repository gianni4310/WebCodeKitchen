
document.addEventListener('DOMContentLoaded', () => {
    const humanFigure = document.querySelector('.human-figure');

    humanFigure.style.transition = 'transform 0.5s';
    humanFigure.addEventListener('click', () => {
        humanFigure.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            humanFigure.style.transform = 'rotate(0deg)';
        }, 500);
    });
});
