document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    function nextSlide() {
        goToSlide(currentSlide + 1, "right");
    }

    function previousSlide() {
        goToSlide(currentSlide - 1, "left");
    }

    function goToSlide(n, direction) {
        let nextSlideIndex = (n + slides.length) % slides.length;
        slides[currentSlide].className = 'slide'; // Reset current slide
        slides[nextSlideIndex].className = 'slide active'; // Prepare next slide to come in
        slides[nextSlideIndex].style.transform = direction === "right" ? "translateX(100%)" : "translateX(-100%)"; // Position offscreen
        setTimeout(() => {
            slides[nextSlideIndex].style.transform = "translateX(0)"; // Slide into view
        }, 20); // A small delay to ensure the transform applies
        dots[currentSlide].className = 'dot';
        dots[nextSlideIndex].className = 'dot active-dot';
        currentSlide = nextSlideIndex;
    }

    let next = document.querySelector('.next-slide');
    let previous = document.querySelector('.prev-slide');

    next.onclick = function() {
        nextSlide();
    };

    previous.onclick = function() {
        previousSlide();
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index, index > currentSlide ? "right" : "left");
        });
    });
});
