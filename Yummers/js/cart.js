//Filename: cart.js 
// Handles cart functionalities

let cart = [];

function addToCart(item, side, comments) {
    const existingItem = cart.find(cartItem => cartItem.name === item.name && cartItem.side === side);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...item, side, comments, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartContainer = document.querySelector('.cart-items');
    cartContainer.innerHTML = cart.map(item => `
        <div>${item.name} x${item.quantity} ($${(item.quantity * item.price).toFixed(2)})</div>
    `).join('');
    document.getElementById("total-price").textContent = `$${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}`;
    document.getElementById("order-button").disabled = cart.length === 0;
}
