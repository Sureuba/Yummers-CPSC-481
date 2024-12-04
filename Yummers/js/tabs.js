//Filename: tabs.js
// Handles switching between tabs and updating the menu
function updateMenu(tab) {
    const menuGrid = document.getElementById("menu-grid");
    menuGrid.innerHTML = menuData[tab].map(item => `
        <div onclick="openModal(${JSON.stringify(item).replace(/"/g, '&quot;')})">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
        </div>
    `).join('');
}

