//Filename: modal.js
// Handles modal interactions

function openModal(item) {
    const modal = document.getElementById("food-modal");
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="food-modal-image-container">
                <img id="modal-image" src="${item.image}" alt="" class="food-photo">
                <div class="food-tags-container">
                    ${item.tags.map(tag => `
                        <div class="food-tag">
                            <img src="${tag.icon}" alt="${tag.text}" class="tag-icon">
                            <span>${tag.text}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="food-modal-details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>$${item.price.toFixed(2)}</p>
                <div class="sides-section">
                    <h4>Sides</h4>
                    <div class="sides-options">
                        <label><input type="radio" name="sides" value="Fries" checked> Fries</label>
                        <label><input type="radio" name="sides" value="Salad"> Salad</label>
                    </div>
                </div>
                <div class="comments-section">
                    <textarea id="comments" placeholder="Add comments"></textarea>
                </div>
                <button id="add-to-cart-modal" class="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
    `;

    modal.style.display = "block";
    document.querySelector(".close").onclick = () => closeModal();
    document.getElementById("add-to-cart-modal").onclick = () => {
        const side = document.querySelector('input[name="sides"]:checked').value;
        const comments = document.getElementById("comments").value;
        addToCart(item, side, comments);
        closeModal();
    };
}

function closeModal() {
    document.getElementById("food-modal").style.display = "none";
}


