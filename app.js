// Chapters 14 - 16


// ARRAYS


// Q1


// var studentNames = [];



// Q2



// var studentNames = [];



// Q3


// var fruits = ["apple", "banana", "orange", "grape"];


// Q4


// var numbers = [1, 2, 3, 4, 5];



// Q5



// var booleans = [true, false, true, false];



// Q6



// var mixedArray = ["hello", 42, true, null, { name: "Alice" }];



// Q7


// let educationQualifications = ["SSC (Secondary School Certificate)", "HSC (Higher Secondary School Certificate)", "BCS (Bachelor of Computer Science)", "BS (Bachelor of Science)", "BCOM (Bachelor of Commerce)", "MS (Master of Science)", "M.Phil. (Master of Philosophy)", "PhD (Doctor of Philosophy)"];
// document.write(`<h1>Qualifications</h1>`);
// for (var i=0; i<educationQualifications.length; i++ ){
//     document.write(`${i}) ${educationQualifications[i]} <br>`);
// }


// Q8



// var studentNames = [`Abdullah`, `Ali`, `Hamza`];
// var studentScores = [400, 450, 420];
// for (var i=0; i<studentNames.length; i++){
//     document.write(`Score of ${studentNames[i]} is ${studentScores[i]}. Percentage: ${studentScores[i] / 500 * 100}% <br>`);
// }



// Q9


// var colors = [`Red`, `Green`, `Blue`, `Yellow`];
// console.log(colors);

// var colorToAdd = prompt(`Enter a color to add to the beginning:`);
// colors.unshift(colorToAdd);
// console.log(`Array after adding to the beginning: ${colors}`);

// var colorToAddEnd = prompt(`Enter a color to add to the end:`);
// colors.push(colorToAddEnd);
// console.log(`Array after adding to the end: ${colors}`);

// var color1 = prompt("Enter the first color to add to the beginning:");
// var color2 = prompt("Enter the second color to add to the beginning:");
// colors.unshift(color1, color2);
// console.log(`Array after adding two more colors to the beginning: ${colors}`);

// colors.shift();
// console.log(`Array after deleting the first color: ${colors}`);

// colors.pop();
// console.log(`Array after deleting the last color: ${colors}`);

// var indexToAdd = +prompt("Enter the index to add a color to:");
// var colorToAddIndex = prompt("Enter the color to add:");
// colors.splice(indexToAdd, 0, colorToAddIndex);
// console.log(`Array after adding a color to a specific index: ${colors}`);

// var indexToDelete = +prompt("Enter the index to delete colors from:");
// var numToDelete = +prompt("Enter the number of colors to delete:");
// colors.splice(indexToDelete, numToDelete);
// console.log(`Array after deleting colors from a specific index: ${colors}`);



// Q10


// var studentScores = [85, 92, 78, 95, 88];
// console.log(`Score of Students: ${studentScores}`);

// studentScores.sort((a, b) => a - b);

// console.log(`Ordered Scores of Students: ${studentScores}`);




// Q11


// var cities = [`Karachi`, `Lahore`, `Islamabad`, `Quetta`, `Peshawar`];
// var selectedCities = cities.slice(0, 3);

// document.write(`Cities list: <br>`);
// document.write(`${cities} <br><br>`);

// document.write(`Selected cities list: <br>`);
// document.write(selectedCities);



// Q12


// var arr = ["This ", " is ", " my ", " cat"];

// var result = arr.join("");

// console.log(result); 



// Q13



// Create an empty array to store values
// const fifoArray = [];

// Add values to the array in FIFO order
// fifoArray.push("Keyboard");
// fifoArray.push("Mouse");
// fifoArray.push("Printer");
// fifoArray.push("Monitor");

// Access and print the values in FIFO order
// console.log("Accessing values in FIFO order:");
// while (fifoArray.length > 0) {
//   console.log(fifoArray.shift());
// }



// Q14



// var manufacturers = [`Apple`, `Samsung`, `Motorola`, `Nokia`, `Sony`, `Haier`];

// for (var i=0; i<manufacturers.length; i++){
//     document.write(`<option>${manufacturers[i]}</option>`);
// }



// Chapters 17 - 20


// ARRAYS AND LOOP


// Q1


// var multidimensionalArray = [];



// Q2


// var multidimensionalArray = [];

// multidimensionalArray[0] = [0, 1, 2, 3];
// multidimensionalArray[1] = [1, 0, 1, 2];
// multidimensionalArray[2] = [2, 1, 0, 1];

// console.log(multidimensionalArray);


// Q3



// for (var i = 1; i <= 10; i++) {
//     console.log(i);
//   }


// Q4


// var multiplicationTable = +prompt(`Enter a number to show its multiplication table`);
// var length = +prompt(`Enter length of multiplication table`);

// document.write(`Multlication table of ${multiplicationTable} <br>`)
// document.write(`Length ${length} <br><br>`)

// for (var i=1; i<=length; i++){
//     document.write(`${multiplicationTable} x ${i} = ${multiplicationTable * i} <br>`);
// }




// Q5



// var fruits = [`Apple`, `Banana`, `Mango`, `Orange`, `Strawberry`];

// for (var i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// for (var j=0; j<fruits.length; j++){
//     console.log(`Element at index ${j} is ${fruits[j]}`);
// }


// Q6



// console.log(`<h1>Counting: <br></br></h1>`)

// for (var i=1; i<=15; i++){
//     console.log(`${i}, `)
// }

// console.log(`<h1>Reverse counting: <br></br></h1>`)


// for (var j=10; j>=1; j++){
//     console.log(`${j}, `)
// }



// Q7


// var items = [`cake`, `apple pie`, `cookie`, `chips`, `patties`];
// var user = prompt("Welcome to our bakery, what do you wanna order");

// var value = false;

// for (var i=0; i<items.length; i++){
//     if(user===items[i]){
//         alert(`${items[i]} is available at index ${i} in our bakery`);
//         value = true;
//     }
// }
// if (value==false){
//     alert(`We're sorry. ${user} is not available in our bakery`)
// }


// Q8


// function findLargestNumber(array) {
//     let largest = array[0];
  
//     for (let i = 1; i < array.length; i++) {
//       if (array[i] > largest) {
//         largest = array[i];
//       }
//     }
  
//     return largest;
//   }
  
//   const A = [24, 53, 78, 91, 12];
//   const largestNumber = findLargestNumber(A);
//   console.log(`Array items: ${A}`);
//   console.log("The largest number is ", largestNumber);



// Q9



// function findSmallestNumber(array) {
//     let smallest = array[0]; // Assume the first element is the smallest initially
  
//     for (let i = 1; i < array.length; i++) {
//       if (array[i] < smallest) {
//         smallest = array[i]; // Update the smallest number if a smaller one is found
//       }
//     }
  
//     return smallest;
//   }
  
//   const A = [24, 53, 78, 91, 12];
//   const smallestNumber = findSmallestNumber(A);
//   console.log(`Array items: ${A}`);
//   console.log("The smallest number is: ", smallestNumber);


// Q10




// for (var i = 5; i <= 100; i += 5) {
//     console.log(i);
//   }