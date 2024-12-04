//Filename: history.js
// Handles order hsitory modal

function openOrderHistoryModal() {
    const modal = document.getElementById("order-history-modal");
    const historyContent = orderHistory.map((order, index) => `
        <div>
            <h3>Order #${index + 1}</h3>
            ${order.items.map(item => `
                <p>${item.name} x${item.quantity}</p>
            `).join('')}
            <p>Total: $${order.total.toFixed(2)}</p>
        </div>
    `).join('');
    modal.innerHTML = `<div>${historyContent}</div>`;
    modal.style.display = "block";
}

function closeOrderHistoryModal() {
    document.getElementById("order-history-modal").style.display = "none";
}
