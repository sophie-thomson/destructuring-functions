/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Enables you to unpack or destructure a range of items from an array.
// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
// ES6 JS automatically assigns each index to match each age with a name
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects

let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
//  Because of braces at the left, ES6 automatically knows to connect the value 
// with the listed keys for an oject
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
// You can also destructure one element of an item / object
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
// By logging only 2 items, ES6 knows to select the first 2 items in the array
console.log(johnNative, johnSecondary);
// If you want to skip values you can use commas to indicate items to skip:
let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

// Example destructuring a subset of an object as above:
 
let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};
let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);


// Using rest parameter syntax

let fruits = ["apple", "orange", "banana", "peach", "cherry"]
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(others);

// Example of using rest parameter syntax ... to destructure objects

let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};
let { brian, anna, ...rest } = favouriteFoods
console.log(brian);
console.log(anna);
console.log(rest);
