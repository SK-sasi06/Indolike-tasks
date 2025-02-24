const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0;

function changeSlide() {
    imgs.forEach((img) => img.style.display = 'none'); // Hide all images
    imgs[n].style.display = 'block'; // Show the current image
}

// Initial display
changeSlide();

prev_btn.addEventListener('click', () => {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSlide();
});

next_btn.addEventListener('click', () => {
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
});

// Horizontal scroll for product slider
const scrollContainer = document.querySelectorAll(".products");

scrollContainer.forEach((item) => {
    item.addEventListener("wheel", (e) => {
        e.preventDefault();
        item.scrollLeft += e.deltaY > 0 ? 100 : -100;
    }, { passive: false }); // Improves performance
});
