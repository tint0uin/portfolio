document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;

    const images = document.querySelectorAll('.carousel-image');
    const imageContainer = document.querySelector('.carousel-images');

    document.querySelector('.next').addEventListener('click', showNext);
    document.querySelector('.prev').addEventListener('click', showPrev);
    console.log(images)

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    }

    function updateCarousel() {
        const imageWidth = images[0].clientWidth;
        imageContainer.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
    }

    // S'adapter à la taille de la fenêtre pour recalculer la largeur des images
    window.addEventListener('resize', updateCarousel);
});
