
const slider = document.querySelector(".video-slider");

document
.getElementById("nextVideo")
.addEventListener("click", () => {

    slider.scrollBy({
        left:400,
        behavior:"smooth"
    });

});

document
.getElementById("prevVideo")
.addEventListener("click", () => {

    slider.scrollBy({
        left:-400,
        behavior:"smooth"
    });

});


const searchInput =
document.getElementById("productSearch");

searchInput.addEventListener("keyup", () => {

    const keyword =
    searchInput.value.toLowerCase();

    const items =
    document.querySelectorAll(".product-item");

    items.forEach(item => {

        const text =
        item.textContent.toLowerCase();

        item.style.display =
        text.includes(keyword)
        ? "flex"
        : "none";

    });

});


