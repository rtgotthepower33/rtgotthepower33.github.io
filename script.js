const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .slide-button");
    const slideButtons = document.querySelectorAll(".slider-wrapper .image-list");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
}

window.addEventListener("load", initSlider);
