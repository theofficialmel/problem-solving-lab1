// JavaScript Lab 1 – Problem Solving
// Write all your code below each prompt

// 1. Sandwich Calculator
// Each guest gets 2 sandwiches. You have 12 guests.
// Calculate total sandwiches needed.
let guests = 12;
let sandwichesPerGuest = 2;
let totalSandwiches = guests * sandwichesPerGuest;
console.log("You need " + totalSandwiches + " sandwiches.");

const sandwichesNeeded = guests * sandwichesPerGuest;
console.log(`You need ${sandwichesNeeded} sandwiches.`);




// 2. Movie Budget
// You have $40. A movie ticket costs $9.50.
// How many full tickets can you buy, and what's the leftover amount?
let budget = 40;
let ticketPrice = 9.50;
let budgetAfterPurchases = budget % ticketPrice;
let ticketsPurchased = (budget - budgetAfterPurchases) / ticketPrice;
console.log("You can buy " + ticketsPurchased + " tickets and have $" + budgetAfterPurchases + " left over.");



/* 3. Dog Age Converter
Convert a dog’s age to human years
(1 dog year = 7 human years)
*/
let dogAge = 3;
let humanage = dogAge * 7
console.log("Your dog is " + humanage + " years old in human years.")



// 4. Combine and Print
// Create variables for your name, favorite food, and a hobby.
// Print a sentence using all 3.
let name = "jamel";
let favoriteFood = "pizza";
let hobby = "coding";
console.log (name + " loves " + favoriteFood + " and " + hobby + ".") 