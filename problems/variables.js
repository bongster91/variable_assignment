// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
//  * Store a future year in a variable.
//  * Calculate your 2 possible ages for that year based on the stored values.
//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.

const birthYear = 1991
let futureYear = 2050
let ageMin = 58
let ageMax = 59

console.log('I will be either ' + ageMin + ' or ' + ageMax + ' in ' + futureYear)

// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
//  * Store a maximum age in a constant variable.
//  * Store an estimated snack amount per day (as a number).
//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".

let currentAge = 29
const maxAge = 50
let snackAmount = 10
let snackNumber = (snackAmount * 365) * (maxAge - currentAge)

console.log('You will need ' + snackNumber + ' to last you until the age of ' + maxAge)

// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

let radius = 10
let circumferenceResult = Math.PI * (2*radius)
let areaOfCircle = Math.PI * Math.pow(10,2);
 console.log ('The circumference is ' + circumferenceResult + '.')
 console.log ('The area is ' + areaOfCircle)

// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
//  * Now store a fahrenheit temperature into a variable.
//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."

let celsius = 0
let tempInFahrenheit = celsius * (9/5) + 32
let fahrenheit = 100
let tempInCelsius = fahrenheit - 32 * (5/9)
console.log(celsius + '\xB0C is ' + tempInFahrenheit + '\xB0F')
console.log(fahrenheit + '\xB0F is ' + tempInCelsius + '\xB0C')

// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
//  * Store Bob's grade on a test to a variable
//  * Store Cam's grade on a test to a variable
//  * Find the average grade of all students
//  * Store Dee's grade on a test to a variable
//  * Find the average grade of all students
//  * Print out if Dee's grade is higher than the class average

let Alice = 90
let Bob = 50
let Cam = 75
let averageGrade = (Alice + Bob + Cam)/3
let Dee = 82
let averageTotalGrade = (Alice + Bob +Cam + Dee)/4
console.log(Dee > averageTotalGrade)

// ## Problem Six

// Find the last number:
// * You are given a number a. Print the last digit of a.
// * Example
// * Input: 
// * a = 123
// * Output:
// * 3

// Hint:
// Use the remainder % operator.

let a = 50
console.log(a % 10)

// ## Problem Seven

// Alice's Age
// * x years from now Alice will be y times older than her brother Bob. Bob is 12 years old. How old is Alice?
// * Example 1
// * Input: 
// * x = 3
// * y = 2
// * bob = 12
// * Expected values: 
// * alice = 27
// 
// * Example 2
// * Input: 
// * x = 1
// * y = 3
// * bob = 12
// * Expected values: 
// * alice = 38

// * Hint:
// * alice + x = y * (bob + x)
// * Solve for alice

let bob = 12
let x = 15
let y = 2
let alice = y * (bob + x) - x
console.log(alice)
// ## Problem Eight

// * Cat and Dog Percentages
// * An animal daycare consists of `numberOfCats` cats and `numberOfDogs` dogs.
// * Print the percentage of dogs in the daycare followed by the percentage of cats in the class. The percentage should be printed rounded down to the nearest integer. For example 33.333333333333 will be printed as 33.
// * Example 
// * Input
// * numberOfCats = 20  
// * numberOfDogs = 60
// * Output:
// * 25% of the daycare animals are cats
// * 75% of the daycare animals are dogs

let numberOfCats = 20
let numberOfDogs = 60
let sum = numberOfCats + numberOfDogs
let percentCats = numberOfCats / sum * 100
console.log(percentCats + '% of the daycare animals are cats')
let percentDogs = numberOfDogs / sum * 100
console.log(percentDogs + '% of the daycare animals are dogs')

// ## Problem Nine

// * Leap Year Calculator
// * Given a year, determine if it's a leap year.  
// * A leap year is a year containing an extra day. It has 366 days instead of the normal 365 days. 
// * The extra day is added in February, which has 29 days instead of the normal 28 days. 
// * Leap years occur every 4 years. 2012 was a leap year and 2016 will also be a leap year. 
// * The above rule is valid except that every 100 years special rules apply. 
// * Years that are divisible by 100 are not leap years if they are not also divisible by 400. 
// * For example 1900 was not a leap year, but 2000 was. Print "Leap year!" or "Not a leap year!" depending on the year you are provided.

let leapYear = 20
let isLeapYear = leapYear % 4 || (leapYear % 100 && leapYear % 400)
console.log(isLeapYear === 0 && 'Leap Year!' || isLeapYear !== 0 && 'Not a Leap Year!')

// ## Problem Ten: Predict the output

// For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

//a. 
//    ```js
    let num1 = 2
    let num2 = 5
    let num3 = num1 * num2
    console.log(num3) 
    // 10
//    ```

// b. 
//     ```js
    let str = 'jel' 
    str += 'lo'
    console.log(str) // jello
//     ```

// c. 
//     ```js
    let string =  'My favorite number is ';
    let number = 42
    let sentence = string + number
    console.log(typeof(sentence)) // string
//     ```