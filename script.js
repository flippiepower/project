document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Elements to animate
    const elements = document.querySelectorAll('main, img');

    // Check if an element is in viewport
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Add visible class to elements in viewport
    function onScroll() {
        elements.forEach(el => {
            if (isInViewport(el)) {
                el.classList.add('visible');
            }
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', onScroll);

    // Initial check
    onScroll();
});

let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Function to show slides
function showSlide(index) {
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }

    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    slides[slideIndex].style.display = 'block';
}

// Show initial slide
showSlide(slideIndex);

// Previous slide button click event
prevBtn.addEventListener('click', () => {
    slideIndex--;
    showSlide(slideIndex);
});

// Next slide button click event
nextBtn.addEventListener('click', () => {
    slideIndex++;
    showSlide(slideIndex);
});

  let slideIndex = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        // Function to show slides
        function showSlide(index) {
            if (index < 0) {
                slideIndex = slides.length - 1;
            } else if (index >= slides.length) {
                slideIndex = 0;
            }

            slides.forEach((slide) => {
                slide.style.display = 'none';
            });

            slides[slideIndex].style.display = 'block';
        }

        // Show initial slide
        showSlide(slideIndex);

        // Previous slide button click event
        prevBtn.addEventListener('click', () => {
            slideIndex--;
            showSlide(slideIndex);
        });

        // Next slide button click event
        nextBtn.addEventListener('click', () => {
            slideIndex++;
            showSlide(slideIndex);
        });

        // Automatic slide change
        function autoSlide() {
            slideIndex++;
            showSlide(slideIndex);
        }

        // Set interval for automatic slide change
        setInterval(autoSlide, 3000); // Change slide every 3 seconds


