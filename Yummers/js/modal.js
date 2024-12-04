// Filename: modal.js
// Handles modal interactions

function openModal(item) {
    const modal = document.getElementById("food-modal");
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="food-modal-image-container">
                <img src="${item.image}" alt="${item.name}" class="food-photo">
                <div>${item.description}</div>
                <div>Price: $${item.price.toFixed(2)}</div>
            </div>
        </div>
    `;
    modal.style.display = "block";
    document.querySelector(".close").onclick = () => closeModal();
}

function closeModal() {
    document.getElementById("food-modal").style.display = "none";
}



