// Filename: app.js
// initializes/starts the app and manages interactions between components 
// Initialize Menu and Event Listeners
document.querySelectorAll('.menu-tab').forEach(tab => {
    tab.onclick = () => {
        document.querySelector('.menu-tab.active').classList.remove('active');
        tab.classList.add('active');
        updateMenu(tab.dataset.tab);
    };
});

// Initialize the menu with the "appetizers" tab
updateMenu("appetizers");

// Modal Event Listeners
document.getElementById("food-modal").addEventListener("click", (event) => {
    if (event.target.classList.contains("close")) {
        closeModal();
    }
});

// Cart Button Functionality
document.querySelector(".cart-items").addEventListener("click", (event) => {
    const button = event.target;

    // Handle increase and decrease button clicks
    if (button.classList.contains("increase") || button.classList.contains("decrease")) {
        const itemName = button.getAttribute("data-item");
        const itemSide = button.getAttribute("data-side");
        const itemComments = button.getAttribute("data-comments");
        const cartItem = cart.find(item => item.name === itemName && item.side === itemSide && item.comments === itemComments);

        if (button.classList.contains("increase")) {
            cartItem.quantity++;
        } else if (button.classList.contains("decrease") && cartItem.quantity > 1) {
            cartItem.quantity--;
        }

        updateCart();
    }

    // Remove item from cart
    if (button.classList.contains("remove-btn")) {
        const itemName = button.getAttribute("data-item");
        const itemSide = button.getAttribute("data-side");
        const itemComments = button.getAttribute("data-comments");
        cart = cart.filter(item => !(item.name === itemName && item.side === itemSide && item.comments === itemComments));
        updateCart();
    }
});

// Order Button Event Listener
document.getElementById("order-button").addEventListener("click", () => {
    openConfirmOrderModal();
});

// Confirm Order Button Functionality
document.getElementById("confirm-order-button").addEventListener("click", () => {
    const subtotal = parseFloat(document.getElementById("confirm-subtotal").textContent.replace('$', ''));
    const tax = parseFloat(document.getElementById("confirm-tax").textContent.replace('$', ''));
    const total = parseFloat(document.getElementById("confirm-total").textContent.replace('$', ''));
    const order = {
        items: [...cart],
        subtotal,
        tax,
        total,
        comments: document.getElementById("order-comments").value
    };

    // Add order to history
    orderHistory.push(order);

    alert("Order confirmed! Thank you.");
    cart = [];
    updateCart();
    closeConfirmOrderModal();
});

// History Button Event Listener
document.getElementById("history-button").addEventListener("click", () => {
    openOrderHistoryModal();
});

// Close History Modal on Click Outside
document.querySelector(".order-history-modal").addEventListener("click", (event) => {
    if (event.target.classList.contains("order-history-modal")) {
        closeOrderHistoryModal();
    }
});

