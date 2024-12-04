// Filename: app.js
// initializes/starts the app and manages interactions between components 

document.querySelectorAll('.menu-tab').forEach(tab => {
    tab.onclick = () => {
        document.querySelector('.menu-tab.active').classList.remove('active');
        tab.classList.add('active');
        updateMenu(tab.dataset.tab);
    };
});

updateMenu("appetizers");