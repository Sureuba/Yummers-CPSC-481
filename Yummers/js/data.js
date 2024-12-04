//Filename: data.js
// Stores all static data from menu items user clicks 

// Filename: data.js
// Stores static data for the menu

const menuData = {
    appetizers: [
        {
            name: "Chicken Wings",
            price: 12.99,
            description: "Juicy chicken wings served with your choice of sauce.",
            tags: [
                { icon: "assets/gluten_free.png", text: "Gluten Free" },
                { icon: "assets/nut_free.png", text: "Nut Free" }
            ],
            image: "assets/chicken_wings.png"
        },
        {
            name: "Bruschetta",
            price: 8.99,
            description: "Grilled bread topped with tomato, basil, and garlic.",
            tags: [
                { icon: "assets/vegetarian.png", text: "Vegetarian" },
                { icon: "assets/nut_free.png", text: "Nut Free" }
            ],
            image: "assets/bruschetta.png"
        }
    ],
    drinks: [
        { name: "Coke", price: 2.99, description: "Classic Coca-Cola.", tags: [], image: "assets/coke.png" },
        { name: "Sprite", price: 2.99, description: "Lemon-lime soda.", tags: [], image: "assets/sprite.png" }
    ]
};

let orderHistory = [];

