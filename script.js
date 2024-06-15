const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .slide-button");
    const slideButtons = document.querySelectorAll(".slider-wrapper .image-list");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thum");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    scrollbarThumb.addEventListener("mousedown", (e) =>{
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (e) =>{
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;


            scrollbarThumb.style.left = '${boundedPosition}px';
            imageList.scrollLeft = scrollPosition;
        }
        const handleMouseUp = () =>{
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseUp", handleMouseUp);
        }


        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseUp", handleMouseUp);
    });

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    const updateScrollThumbPosition = () =>{
        const ScollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = '${thumbPosition}px';
    }

    imageList.addEventListener("scroll", () =>{
        handleSlideButtons();
        updateScrollThumbPosition();
    });    
}

window.addEventListener("load", initSlider);

const bgAnimation = document.getElementById
('bgAnimation');

const numberOfColorBoxes = 400;

for(let i = 0; i < numberOfColorBoxes; i++){
    const colorBox = document.createElement
    ('div');

    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}
