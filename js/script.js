document.addEventListener("DOMContentLoaded", () => {
    const viewImg = document.getElementById("viewImg");
    const cards = document.querySelectorAll(".menu .card");
    const btnLeft = document.getElementById("left");
    const btnRight = document.getElementById("right");

    let currentIndex = 0;


    if (cards.length > 0) {
        viewImg.src = cards[0].querySelector("img").src;
    }

    cards.forEach((card, index) => {
        card.addEventListener("mouseenter", () => {
            currentIndex = index;
            viewImg.src = card.querySelector("img").src;
        });
    });

    btnLeft.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = cards.length - 1;
        }
        viewImg.src = cards[currentIndex].querySelector("img").src;
    });

    btnRight.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= cards.length) {
            currentIndex = 0;
        }
        viewImg.src = cards[currentIndex].querySelector("img").src;
    });
});



