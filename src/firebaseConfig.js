// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVmuprQp0AXArYRJo8DC9vwPVKon5wRJc",
  authDomain: "restrogurudemo.firebaseapp.com",
  projectId: "restrogurudemo",
  storageBucket: "restrogurudemo.appspot.com",
  messagingSenderId: "917760413952",
  appId: "1:917760413952:web:e7fafcdc70cc3380e1a3e5",
  measurementId: "G-PHPJ1VRNCH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
// const recipes = [
//   // Italian recipes (already provided above)
//   {
//     category: "Italian",
//     title: "Spaghetti Marinara",
//     author: "Chef Mario",
//     image: "https://example.com/spaghetti.jpg",
//     ingredients: ["Spaghetti", "Tomato sauce", "Garlic", "Basil", "Olive oil"],
//     rating: 4.5,
//     preparation:
//       "Boil the spaghetti. In a separate pan, prepare the tomato sauce with garlic and basil. Mix with the spaghetti and serve.",
//     suitableForDiet: true,
//     vegetarian: true,
//   },
//   {
//     category: "Italian",
//     title: "Pepperoni Pizza",
//     author: "Chef Luigi",
//     image: "https://example.com/pizza.jpg",
//     ingredients: [
//       "Pizza dough",
//       "Tomato sauce",
//       "Mozzarella cheese",
//       "Pepperoni",
//     ],
//     rating: 4.7,
//     preparation:
//       "Spread the tomato sauce on the pizza dough. Add cheese and pepperoni. Bake in the oven at 200°C for 15 minutes.",
//     suitableForDiet: false,
//     vegetarian: false,
//   },
//   {
//     category: "Italian",
//     title: "Mushroom Risotto",
//     author: "Chef Anna",
//     image: "https://example.com/risotto.jpg",
//     ingredients: [
//       "Arborio rice",
//       "Chicken broth",
//       "Parmesan cheese",
//       "Mushrooms",
//     ],
//     rating: 4.3,
//     preparation:
//       "Cook the rice with chicken broth, stirring constantly. Add mushrooms and cheese. Serve hot.",
//     suitableForDiet: true,
//     vegetarian: true,
//   },
//   // Mexican recipes (already provided above)
//   {
//     category: "Mexican",
//     title: "Beef Tacos",
//     author: "Chef Carlos",
//     image: "https://example.com/tacos.jpg",
//     ingredients: ["Taco shells", "Ground beef", "Lettuce", "Cheese", "Salsa"],
//     rating: 4.6,
//     preparation:
//       "Cook the ground beef with spices. Fill the taco shells with beef, lettuce, cheese, and salsa.",
//     suitableForDiet: false,
//     vegetarian: false,
//   },
//   {
//     category: "Mexican",
//     title: "Chicken Enchiladas",
//     author: "Chef Maria",
//     image: "https://example.com/enchiladas.jpg",
//     ingredients: ["Tortillas", "Chicken", "Enchilada sauce", "Cheese"],
//     rating: 4.4,
//     preparation:
//       "Fill tortillas with chicken and cheese. Roll up and cover with enchilada sauce. Bake at 180°C for 20 minutes.",
//     suitableForDiet: false,
//     vegetarian: false,
//   },
//   {
//     category: "Mexican",
//     title: "Guacamole",
//     author: "Chef Pedro",
//     image: "https://example.com/guacamole.jpg",
//     ingredients: ["Avocados", "Tomato", "Onion", "Lime", "Salt"],
//     rating: 4.8,
//     preparation:
//       "Mash the avocados and mix with chopped tomato, onion, lime juice, and salt. Serve with chips.",
//     suitableForDiet: true,
//     vegetarian: true,
//   },
//   // Chinese recipes (already provided above)
//   {
//     category: "Chinese",
//     title: "Chicken Fried Rice",
//     author: "Chef Li",
//     image: "https://example.com/fried_rice.jpg",
//     ingredients: ["Rice", "Soy sauce", "Eggs", "Vegetables", "Chicken"],
//     rating: 4.5,
//     preparation:
//       "Stir-fry the vegetables and chicken. Add rice and soy sauce. Cook until everything is mixed well.",
//     suitableForDiet: false,
//     vegetarian: false,
//   },
//   {
//     category: "Chinese",
//     title: "Pork Dumplings",
//     author: "Chef Mei",
//     image: "https://example.com/dumplings.jpg",
//     ingredients: ["Dumpling wrappers", "Ground pork", "Cabbage", "Ginger"],
//     rating: 4.7,
//     preparation:
//       "Mix ground pork with chopped cabbage and ginger. Fill the dumpling wrappers and steam until cooked.",
//     suitableForDiet: false,
//     vegetarian: false,
//   },
//   {
//     category: "Chinese",
//     title: "Vegetable Stir-Fry",
//     author: "Chef Zhang",
//     image: "https://example.com/veggie_stir_fry.jpg",
//     ingredients: ["Broccoli", "Carrots", "Bell peppers", "Soy sauce", "Garlic"],
//     rating: 4.3,
//     preparation:
//       "Stir-fry the vegetables with garlic and soy sauce. Serve with rice.",
//     suitableForDiet: true,
//     vegetarian: true,
//   },
//   // Indian recipes
//   {
//     category: "Indian",
//     title: "Butter Chicken",
//     author: "Chef Raj",
//     image: "https://example.com/butter_chicken.jpg",
//     ingredients: ["Chicken", "Tomato puree", "Cream", "Butter", "Spices"],
//     rating: 4.9,
//     preparation:
//       "Cook chicken in a rich, creamy sauce made from tomato puree, cream, and Indian spices. Serve with naan or rice.",
//     suitableForDiet: false,
//     vegetarian: false,
//   },
//   {
//     category: "Indian",
//     title: "Chana Masala",
//     author: "Chef Priya",
//     image: "https://example.com/chana_masala.jpg",
//     ingredients: ["Chickpeas", "Tomato", "Onion", "Garlic", "Spices"],
//     rating: 4.7,
//     preparation:
//       "Cook chickpeas in a spicy, tangy sauce made from tomatoes, onions, garlic, and Indian spices. Serve with rice or roti.",
//     suitableForDiet: true,
//     vegetarian: true,
//   },
//   {
//     category: "Indian",
//     title: "Palak Paneer",
//     author: "Chef Saanvi",
//     image: "https://example.com/palak_paneer.jpg",
//     ingredients: ["Paneer", "Spinach", "Cream", "Garlic", "Spices"],
//     rating: 4.8,
//     preparation:
//       "Cook paneer cubes in a creamy spinach sauce made with garlic and Indian spices. Serve with naan or rice.",
//     suitableForDiet: true,
//     vegetarian: true,
//   },
//   // Mediterranean recipes
//   {
//     category: "Mediterranean",
//     title: "Greek Salad",
//     author: "Chef Nikos",
//     image: "https://example.com/greek_salad.jpg",
//     ingredients: ["Cucumber", "Tomato", "Feta cheese", "Olives", "Olive oil"],
//     rating: 4.5,
//     preparation:
//       "Chop cucumber and tomato, mix with feta cheese and olives. Drizzle with olive oil and serve fresh.",
//     suitableForDiet: true,
//     vegetarian: true,
//   },
//   {
//     category: "Mediterranean",
//     title: "Falafel",
//     author: "Chef Yasmin",
//     image: "https://example.com/falafel.jpg",
//     ingredients: ["Chickpeas", "Garlic", "Parsley", "Cumin", "Tahini"],
//     rating: 4.6,
//     preparation:
//       "Blend chickpeas with garlic, parsley, and cumin. Form into balls and fry. Serve with tahini sauce.",
//     suitableForDiet: true,
//     vegetarian: true,
//   },
//   {
//     category: "Mediterranean",
//     title: "Shakshuka",
//     author: "Chef Leila",
//     image: "https://example.com/shakshuka.jpg",
//     ingredients: ["Tomatoes", "Bell peppers", "Eggs", "Onions", "Spices"],
//     rating: 4.8,
//     preparation:
//       "Cook tomatoes, bell peppers, and onions with spices. Create wells in the mixture and crack eggs into them. Cook until eggs are done to your liking.",
//     suitableForDiet: true,
//     vegetarian: true,
//   },
//   // American recipes
//   {
//     category: "American",
//     title: "Classic Burger",
//     author: "Chef John",
//     image: "https://example.com/classic_burger.jpg",
//     ingredients: ["Ground beef", "Burger buns", "Lettuce", "Tomato", "Cheese"],
//     rating: 4.7,
//     preparation:
//       "Form ground beef into patties and grill. Assemble with lettuce, tomato, cheese, and condiments in a bun.",
//     suitableForDiet: false,
//     vegetarian: false,
//   },
//   {
//     category: "American",
//     title: "Mac and Cheese",
//     author: "Chef Emily",
//     image: "https://example.com/mac_and_cheese.jpg",
//     ingredients: ["Macaroni", "Cheddar cheese", "Milk", "Butter", "Flour"],
//     rating: 4.8,
//     preparation:
//       "Cook macaroni. Make a cheese sauce by melting butter, adding flour, then milk and cheese. Mix with pasta and bake until golden.",
//     suitableForDiet: false,
//     vegetarian: true,
//   },
//   {
//     category: "American",
//     title: "Apple Pie",
//     author: "Chef Sarah",
//     image: "https://example.com/apple_pie.jpg",
//     ingredients: ["Apples", "Pie crust", "Sugar", "Cinnamon", "Butter"],
//     rating: 4.9,
//     preparation:
//       "Fill pie crust with sliced apples mixed with sugar and cinnamon. Cover with top crust and bake until golden brown.",
//     suitableForDiet: false,
//     vegetarian: true,
//   },
// ];
