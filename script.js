const share = document.querySelector(".share-links");
const share_button = document.querySelector(".share-button");

share_button.addEventListener("click", function() {
    this.classList.toggle("active");
    share.classList.toggle("active");
})