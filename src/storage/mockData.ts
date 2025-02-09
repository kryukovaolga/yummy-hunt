import avocadoURL from "./../assets/recipe-images/avocado_toast.jpg";
import cakeURL from "./../assets/recipe-images/cake.jpg";
import pizzaURL from "./../assets/recipe-images/pizza.jpeg";
import desertURL from "./../assets/recipe-images/desert.jpeg";
import hamburgerURL from "./../assets/recipe-images/hamburger.jpeg";
import chickenURL from "./../assets/recipe-images/chicken.jpg";
import omletURL from "./../assets/recipe-images/omlet.jpg";
import spaghettiURL from "./../assets/recipe-images/spaghetti.jpeg";
import tacosURL from "./../assets/recipe-images/tacos.jpg";

export interface Ingredient {
  label: string;
  quantity: string;
  quantityUnit: string;
  notes?: string;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
  ingredients: Array<Ingredient>;
  preparationTime: number; // minutes
}

/**
 * this is mock data with list of recipes.
 * in real world application these data will be fetched from backend.
 * assumption: the data were re-mapped for frontend convinience.
 * images are saved in project folder for PoC convinience.
 */
export const getRecipes = (): { [k: string]: Recipe } =>
  [
    {
      id: "1",
      name: "Smashed Avocado Bliss Toast",
      description:
        "A delightful crispy toast topped with creamy avocado, cherry tomatoes, and a hint of lime.",
      image: avocadoURL, // Avocado Toast Image
      ingredients: [
        {
          label: "Avocado",
          quantity: "1",
          quantityUnit: "whole",
          notes: "Ripe and mashed",
        },
        {
          label: "Bread",
          quantity: "2",
          quantityUnit: "slices",
          notes: "Toasted to golden brown",
        },
        {
          label: "Cherry Tomatoes",
          quantity: "5",
          quantityUnit: "pieces",
          notes: "Halved",
        },
        {
          label: "Lime",
          quantity: "1",
          quantityUnit: "slice",
          notes: "For extra zest",
        },
      ],
      preparationTime: 10,
    },
    {
      id: "2",
      name: "Cheesy Love Pepperoni Pizza",
      description:
        "A cheesy, gooey, pepperoni-loaded pizza with a crispy golden crust.",
      image: pizzaURL, // Pizza Image
      ingredients: [
        {
          label: "Pizza Dough",
          quantity: "1",
          quantityUnit: "base",
          notes: "Homemade or store-bought",
        },
        {
          label: "Tomato Sauce",
          quantity: "1/2",
          quantityUnit: "cup",
          notes: "Smooth and rich",
        },
        {
          label: "Mozzarella Cheese",
          quantity: "1",
          quantityUnit: "cup",
          notes: "Shredded",
        },
        {
          label: "Pepperoni",
          quantity: "10",
          quantityUnit: "slices",
          notes: "Spicy and crispy",
        },
      ],
      preparationTime: 15,
    },
    {
      id: "3",
      name: "Heavenly Chocolate Delight",
      description:
        "A rich and fudgy chocolate dessert that melts in your mouth with every bite.",
      image: desertURL, // Dessert Image
      ingredients: [
        {
          label: "Dark Chocolate",
          quantity: "200",
          quantityUnit: "grams",
          notes: "Melted",
        },
        { label: "Flour", quantity: "1", quantityUnit: "cup", notes: "Sifted" },
        {
          label: "Butter",
          quantity: "1/2",
          quantityUnit: "cup",
          notes: "Melted",
        },
        {
          label: "Sugar",
          quantity: "3/4",
          quantityUnit: "cup",
          notes: "For sweetness",
        },
      ],
      preparationTime: 20,
    },
    {
      id: "4",
      name: "Juicy Tower Cheeseburger",
      description:
        "A thick, juicy beef patty topped with melted cheese, crisp lettuce, and fresh tomatoes.",
      image: hamburgerURL, // Hamburger Image
      ingredients: [
        {
          label: "Ground Beef",
          quantity: "200",
          quantityUnit: "grams",
          notes: "Seasoned well",
        },
        {
          label: "Cheddar Cheese",
          quantity: "1",
          quantityUnit: "slice",
          notes: "Melted over the patty",
        },
        {
          label: "Lettuce",
          quantity: "1",
          quantityUnit: "leaf",
          notes: "Crispy and fresh",
        },
        {
          label: "Tomato",
          quantity: "2",
          quantityUnit: "slices",
          notes: "Juicy and ripe",
        },
      ],
      preparationTime: 15,
    },
    {
      id: "5",
      name: "Crispy Golden Fried Chicken",
      description:
        "Crispy on the outside, juicy on the inside—perfectly seasoned fried chicken.",
      image: chickenURL, // Chicken Image
      ingredients: [
        {
          label: "Chicken Drumsticks",
          quantity: "4",
          quantityUnit: "pieces",
          notes: "Skin-on for extra crisp",
        },
        {
          label: "Flour",
          quantity: "1",
          quantityUnit: "cup",
          notes: "For coating",
        },
        {
          label: "Egg",
          quantity: "1",
          quantityUnit: "whole",
          notes: "For binding",
        },
        {
          label: "Seasoning",
          quantity: "To taste",
          quantityUnit: "",
          notes: "Salt, pepper, and paprika",
        },
      ],
      preparationTime: 20,
    },
    {
      id: "6",
      name: "Berrylicious Dream Cake",
      description:
        "A soft vanilla cake layered with fresh berries and whipped cream.",
      image: cakeURL, // Cake Image
      ingredients: [
        {
          label: "Flour",
          quantity: "2",
          quantityUnit: "cups",
          notes: "Sifted for fluffiness",
        },
        {
          label: "Eggs",
          quantity: "3",
          quantityUnit: "whole",
          notes: "Room temperature",
        },
        {
          label: "Sugar",
          quantity: "1",
          quantityUnit: "cup",
          notes: "Granulated",
        },
        {
          label: "Mixed Berries",
          quantity: "1",
          quantityUnit: "cup",
          notes: "For topping",
        },
      ],
      preparationTime: 30,
    },
    {
      id: "7",
      name: "Fluffy Sunrise Omelet",
      description:
        "A soft and fluffy omelet loaded with cheese, mushrooms, and bell peppers.",
      image: omletURL, // Omelet Image
      ingredients: [
        {
          label: "Eggs",
          quantity: "3",
          quantityUnit: "whole",
          notes: "Whisked well",
        },
        {
          label: "Cheese",
          quantity: "1/2",
          quantityUnit: "cup",
          notes: "Shredded",
        },
        {
          label: "Mushrooms",
          quantity: "1/4",
          quantityUnit: "cup",
          notes: "Sliced",
        },
        {
          label: "Bell Peppers",
          quantity: "1/4",
          quantityUnit: "cup",
          notes: "Diced",
        },
      ],
      preparationTime: 5,
    },
    {
      id: "8",
      name: "Saucy Twirl Spaghetti",
      description:
        "Classic spaghetti tossed in a rich tomato sauce with garlic and fresh basil.",
      image: spaghettiURL, // Spaghetti Image
      ingredients: [
        {
          label: "Spaghetti",
          quantity: "200",
          quantityUnit: "grams",
          notes: "Cooked al dente",
        },
        {
          label: "Tomato Sauce",
          quantity: "1",
          quantityUnit: "cup",
          notes: "Rich and tangy",
        },
        {
          label: "Garlic",
          quantity: "2",
          quantityUnit: "cloves",
          notes: "Minced",
        },
        {
          label: "Basil",
          quantity: "1",
          quantityUnit: "tbsp",
          notes: "Chopped fresh",
        },
      ],
      preparationTime: 10,
    },
    {
      id: "9",
      name: "Crunchy Fiesta Tacos",
      description:
        "A deliciously crunchy taco filled with seasoned meat, fresh veggies, and topped with creamy guacamole.",
      image: tacosURL, // Tacos Image
      ingredients: [
        {
          label: "Ground Beef",
          quantity: "200",
          quantityUnit: "g",
          notes: "Cooked with taco seasoning",
        },
        {
          label: "Taco Shells",
          quantity: "3",
          quantityUnit: "pieces",
          notes: "Crispy corn shells",
        },
        {
          label: "Lettuce",
          quantity: "1/2",
          quantityUnit: "cup",
          notes: "Shredded",
        },
        {
          label: "Tomatoes",
          quantity: "1/4",
          quantityUnit: "cup",
          notes: "Diced",
        },
        {
          label: "Cheddar Cheese",
          quantity: "1/4",
          quantityUnit: "cup",
          notes: "Grated",
        },
        {
          label: "Sour Cream",
          quantity: "2",
          quantityUnit: "tbsp",
          notes: "For topping",
        },
        {
          label: "Guacamole",
          quantity: "2",
          quantityUnit: "tbsp",
          notes: "Fresh and creamy",
        },
      ],
      preparationTime: 15,
    },
  ].reduce((acc: { [k: string]: Recipe }, recipe: Recipe) => {
    acc[recipe.id] = recipe;
    return acc;
  }, {});
