function processArray(arr) {
    return arr.map(number => {
        if (number % 2 === 0) {
            return number * number; 
        } else {
            return number * 3;  
        }
    });
}

// Example usage:
const inputArray = [5,6,7,8,9];
const processedArray = processArray(inputArray);
console.log(processedArray);  

function processArray(arr) {
    return arr.map(number => {
        if (number % 2 === 0) {
            return number * number;  // Square the even numbers
        } else {
            return number * 3;  // Triple the odd numbers
        }
    });
}

function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase(); 
        } else {
            return str.toLowerCase();  
        }
    });
}

// Example usage:
const inputStrings = ["hello", "world", "JavaScript", "is", "fun"];
const inputNumbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(inputNumbers);
const formattedStrings = formatArrayStrings(inputStrings, processedNumbers);

console.log(formattedStrings); 

