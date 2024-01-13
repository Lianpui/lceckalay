const contactBtn = document.getElementById("contact");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");
const modalElement = document.getElementById("modal");

function toggleModal(value) {
    if (value === "hidden") {
        overlay.style.display = "none";
        modalElement.style.display = "none";
    } else {
        overlay.style.display = "block";
        modalElement.style.display = "flex";
    }
}

contactBtn.addEventListener("click", function() {
    toggleModal("show");
});

closeBtn.addEventListener("click", function() {
    toggleModal("hidden");
});
