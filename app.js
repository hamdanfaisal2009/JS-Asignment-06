// --------- Sum of the numbers ---------

function addNumbers(a, b) {
    return a + b;
}

let result = addNumbers(10, 7);
console.log(result + ". | This function performs addition.");

// --------- End of Sum of the numbers ---------

// --------- Multiply of the numbers ---------
function mulNumbers(a, b) {
    return a * b;
}

let mulResult = mulNumbers(7, 6);
console.log(mulResult + ". | This function performs multiplication.");

// --------- End of Multiply of the numbers ---------


// --------- Printing my name ---------
function greet(name) {
    return `Hi! ${name}.`;
}
console.log(greet("Hamdan"));
console.log(greet("Mustafa"));

// --------- End of Printing name ---------

// --------- Check if number is even ---------
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(8) + ". | This number is even.");  // true
console.log(isEven(11) + ". | This number is odd.");   // false

// --------- End of Check if number is even ---------

// --------- Count array items ---------

function countItems(arr) {
    return arr.length;
}   
let itemCount = countItems([2, 3, 4, 5]);
console.log(itemCount);

// --------- End of Count array items ---------

// --------- Find bigger number in array ---------

function findbigger (a , b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }       
}

let bgNum = findbigger (110, 20);
console.log(bgNum);

// --------- End of Find bigger number in array ---------


// ------------------------------------------------ ASSIGNMENT COMPLETED ------------------------------------------------
