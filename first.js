// CHAPTER ONE

//Practice Question 1
// Create a const object called “product” to store information  (product name, rateings, price, offers)

// const  product = {
//     productName : "Pen",
//     ratings : 4,
//     price : 250,
//     offer : 5,
// };

//Practice Question 1
// Create a const object called “profile” to store information (username, userID, followers, following, posts)

// const user = {
//     userID : "Aarthyacchu",
//     userName : "Aarthy",
//     posts : 24,
//     followers : 600,
//     following : 4
// };


// CHAPTER TWO

//Practice Question 1
//  Get user to input a number using prompt(“Enter a number”). Check if the number is a multiple of 5 or not.

// let n = prompt("Enter a number");

// if (n%5==0){
//     console.log(n, " is divisible by 5");
// }
// else{
//     console.log(n, " not divisible by 5");
// }

//Practice Question 2

// let marks = prompt("Enter the marks");

// if ( marks >=80 ){
//     console.log("A")
// }
// else if( marks >=70){
//     console.log("B")
// }
// else if( marks >=60){
//     console.log("C")
// }
// else if( marks >=50){
//     console.log("D")
// }
// else{
//     console.log("F")
// }

// CHAPTER THREE

//Practice Question 1
// Print all even numbers from 0 to 100.

// for (let i = 0; i <= 100; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }


//Practice Question 2
//Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

// let guess = 25;

// let number = prompt ("Guess the number ");

// // console.log(number);

// if(guess==number){
//     console.log("Congragulations you have guessed the right number");
// }
// else{
//     console.log("Sorry you have guessed the wrong number. Try again")
// }

//Practice Question 3
//Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.

// let userName = prompt ("Enter your User name");
// str = userName.length

// userId = ` @${userName}${str}`
// console.log(userId)

// CHAPTER FOUR

//Practice Question 1
//For a given array with marks of students -> [85, 97, 44, 37, 76, 60] . Find the average marks of the entire class.

// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for (let i=0; i<marks.length; i++){
//     sum += marks[i];
// }
// avg = sum / 6;
// console.log(avg);

//Practice Question 2
// For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

// let price = [250, 645, 300, 900, 50];

// for (let i = 0; i < price.length; i++){
//     let offer = price[i] / 10;
//     price[i]  -= offer;
// }

// console.log(price);  

//Practice Question 3
// Create an array to store companies -> “Bloomberg,“Microsoft” ,“Uber”, “Google” , “IBM”, “Netflix”

// let companies = [ "Bloomberg" , "Microsoft","Uber","Google","IBM","Netflix"];

// A:  Remove the first companyfrom the array

// companies.shift();
// console.log(companies)

// B: Remove Uber & Add Ola in its place

// cmp = companies.splice(1,1,"Ola");
// console.log(cmp)
// console.log(companies);

//  C: Add Amazon at the end

// companies.push("Amazon");
// console.log(companies);

// CHAPTER FIVE

//Practice Question 1
//Create a function using the “function” keyword that takes a String as an argument & returns the number of vowels in the string.


// function vowels(msg){

//     let myString = ["a", "e", "i", "o", "u"];
//     let count = 0;

//     for(let val of msg){

//         if (myString.includes(val)){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(vowels("aishwarya"));

//Practice Question 2
//Create a arrow function that takes a String as an argument & returns the number of vowels in the string.

// const vowels = (msg) => {

    
//     let myString = ["a", "e", "i", "o", "u"];
//     let count = 0;

//     for(let val of msg){
        
//         if (myString.includes(val)){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(vowels("ball"));

//Practice Question 3
// For a given array of numbers, print the square of each value using the forEach loop.

// let arr = [1, 2, 3, 4, 5, 6,7, 8, 9, 10];

// arr.forEach( (val) =>{
//     let sqr = val * val;
//     console.log(sqr);
// })

//Practice Question 4

//We are given array of marks of students. Filter our of the marks of students that scored 90+.

// let myArray = [67, 89, 67, 95, 93, 62, 23, 67, 34, 89, 95, 85, 95, 98, 93, 45, 56, 98];

// newArray = myArray.filter( ( val ) => {

//     return val >= 90;

// })

// console.log(newArray);

//Practice Question 4
// Take a number n as input from user. Create an array of numbers from 1 to n.
//Use the reduce method to calculate sum of all numbers in the array.
//Use the reduce method to calculate product of all numbers in the array.

let input = prompt("Enter a number");

let array = [ ];

for(let i = 1; i<=input; i++){
    array[i-1] = i;
}
console.log(array);

const sum = array.reduce(
    (initial, end) => initial + end,
);
console.log("The sum of entered number is", sum);

const  pdt = array.reduce(
    (initial, end) => initial * end,
);

console.log("The product of entered number is", pdt);
