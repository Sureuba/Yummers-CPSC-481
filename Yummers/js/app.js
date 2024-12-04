// Filename: app.js
// initializes/starts the app and manages interactions between components 
document.querySelectorAll('.menu-tab').forEach(tab => {
    tab.onclick = () => {
        document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        updateMenu(tab.dataset.tab);
    };
});

// Load initial tab
updateMenu("appetizers");
