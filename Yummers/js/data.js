//Filename: data.js
// Stores all static data from menu items user clicks 

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
        },
        {
            name: "Stuffed Mushrooms",
            price: 9.99,
            description: "Mushrooms filled with a cheesy garlic herb stuffing.",
            tags: [
                { icon: "assets/vegetarian.png", text: "Vegetarian" },
                { icon: "assets/nut_free.png", text: "Nut Free" }
            ],
            image: "assets/stuffed_mushrooms.png"
        },
        {
            name: "Garlic Bread",
            price: 6.99,
            description: "Toasted baguette with garlic butter and herbs.",
            tags: [
                { icon: "assets/vegetarian.png", text: "Vegetarian" },
                { icon: "assets/nut_free.png", text: "Nut Free" }
            ],
            image: "assets/garlic_bread.png"
        }
    ],
    mains: [
        {
            name: "Steak and Fries",
            price: 24.99,
            description: "Grilled steak cooked to your liking with crispy fries.",
            tags: [
                { icon: "assets/gluten_free.png", text: "Gluten Free" },
                { icon: "assets/nut_free.png", text: "Nut Free" }
            ],
            image: "assets/steak_fries.png"
        },
        {
            name: "Grilled Salmon",
            price: 21.99,
            description: "Freshly grilled salmon served with steamed vegetables.",
            tags: [
                { icon: "assets/gluten_free.png", text: "Gluten Free" },
                { icon: "assets/nut_free.png", text: "Nut Free" }
            ],
            image: "assets/grilled_salmon.png"
        },
        {
            name: "Spaghetti Carbonara",
            price: 18.99,
            description: "Classic Italian pasta with creamy sauce and pancetta.",
            tags: [
                { icon: "assets/nut_free.png", text: "Nut Free" }
            ],
            image: "assets/spaghetti_carbonara.png"
        },
        {
            name: "Vegetable Stir-Fry",
            price: 17.99,
            description: "Stir-fried seasonal vegetables with soy-ginger sauce.",
            tags: [
                { icon: "assets/vegan.png", text: "Vegan" },
                { icon: "assets/vegetarian.png", text: "Vegetarian" },
                { icon: "assets/nut_free.png", text: "Nut Free" }
            ],
            image: "assets/vegetable_stirfry.png"
        }
    ],
    soups: [
        {
            name: "Tomato Basil Soup",
            price: 7.99,
            description: "Creamy tomato soup with a hint of basil.",
            tags: [
                { icon: "assets/vegetarian.png", text: "Vegetarian" },
                { icon: "assets/gluten_free.png", text: "Gluten Free" },
                { icon: "assets/nut_free.png", text: "Nut Free" }
            ],
            image: "assets/tomato_basil_soup.png"
        },
        {
            name: "Chicken Noodle Soup",
            price: 8.99,
            description: "Hearty soup with chicken, noodles, and vegetables.",
            tags: [
                { icon: "assets/nut_free.png", text: "Nut Free" }
            ],
            image: "assets/chicken_noodle_soup.png"
        },
        {
            name: "Miso Soup",
            price: 6.99,
            description: "Traditional Japanese soup with tofu, seaweed, and scallions.",
            tags: [
                { icon: "assets/vegan.png", text: "Vegan" },
                { icon: "assets/nut_free.png", text: "Nut Free" }
            ],
            image: "assets/miso_soup.png"
        }
    ],
    handhelds: [
        {
            name: "Club Sandwich",
            price: 14.99,
            description: "Triple-layered sandwich with turkey, bacon, lettuce, and tomato.",
            tags: [
                { icon: "assets/nut_free.png", text: "Nut Free" }
            ],
            image: "assets/club_sandwich.png"
        },
        {
            name: "Veggie Wrap",
            price: 13.99,
            description: "Whole wheat wrap filled with fresh veggies and hummus.",
            tags: [
                { icon: "assets/vegetarian.png", text: "Vegetarian" },
                { icon: "assets/vegan.png", text: "Vegan" }
            ],
            image: "assets/veggie_wrap.png"
        },
        {
            name: "Pulled Pork Sandwich",
            price: 15.99,
            description: "Slow-cooked pulled pork with BBQ sauce on a brioche bun.",
            tags: [
                { icon: "assets/nut_free.png", text: "Nut Free" }
            ],
            image: "assets/pulled_pork_sandwich.png"
        },
        {
            name: "Falafel Wrap",
            price: 14.99,
            description: "Pita wrap with falafel, tahini sauce, and fresh veggies.",
            tags: [
                { icon: "assets/vegetarian.png", text: "Vegetarian" },
                { icon: "assets/vegan.png", text: "Vegan" }
            ],
            image: "assets/falafel_wrap.png"
        }
    ],
    desserts: [
        {
            name: "Cheesecake",
            price: 9.99,
            description: "Creamy cheesecake with a graham cracker crust.",
            tags: [
                { icon: "assets/nut_free.png", text: "Nut Free" }
            ],
            image: "assets/cheesecake.png"
        },
        {
            name: "Ice Cream Sundae",
            price: 7.99,
            description: "Vanilla ice cream topped with chocolate sauce and whipped cream.",
            tags: [
                { icon: "assets/nut_free.png", text: "Nut Free" }
            ],
            image: "assets/ice_cream_sundae.png"
        },
        {
            name: "Brownie",
            price: 6.99,
            description: "Rich and fudgy chocolate brownie.",
            tags: [
                { icon: "assets/nut_free.png", text: "Nut Free" }
            ],
            image: "assets/brownie.png"
        }
    ],
    drinks: [
        { name: "Coke", price: 2.99, description: "Classic Coca-Cola.", tags: [], image: "assets/coke.png" },
        { name: "Diet Coke", price: 2.99, description: "Sugar-free Coca-Cola.", tags: [], image: "assets/diet_coke.png" },
        { name: "Sprite", price: 2.99, description: "Lemon-lime soda.", tags: [], image: "assets/sprite.png" },
        { name: "Lemonade", price: 3.99, description: "Freshly squeezed lemonade.", tags: [], image: "assets/lemonade.png" }
    ]
};

let orderHistory = [];
