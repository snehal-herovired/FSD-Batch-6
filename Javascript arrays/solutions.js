// Q1: Y2K problem: Databases written in 1970's used 2-digit fields to represent the year e.g., 77, 80 instead of 1977, 1980.
// However with the year 2000 nearby all these fields had to be changed to be 4-digit date. 
// Write a program to change a given 2-digit year to a 4-digit year. 
// Remember that if the 2-digit number is less than 35 it means it’s a year in the 2000-year range. E.g., 15 would mean 2015 not 1915.

function convertYear(year) {
  if (year < 35) {
    return 2000 + year;
  } else {
    return 1900 + year;
  }
}

// Example usage
console.log(convertYear(77)); // Output: 1977
console.log(convertYear(15)); // Output: 2015

// Q2:In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

// Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any dice roll.

// Examples

// possibleBonus(3, 7) true

// possibleBonus(1, 9) false

// possibleBonus(5, 3) false



// Note: -

// You cannot move backward (which is why example #3 doesn't work).

// If you are already on the same tile, return false, as you would be advancing away.

// Expect only positive integer inputs.


function possibleBonus(a, b) {
    if (a === b) {
      return false; // Already on the same tile
    }
    const maxRoll = 6; // Maximum dice roll
    for (let i = 1; i <= maxRoll; i++) {
      if (a + i === b || b + i === a) {
        return true; // Bonus is possible
      }
    }
    return false; // No bonus possible
  }
  
  // Example usage
  console.log(possibleBonus(3, 7)); // Output: true
  console.log(possibleBonus(1, 9)); // Output: false
  console.log(possibleBonus(5, 3)); // Output: false


// Q:3 Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

// Example: -arrayOfMultiples(12, 10) [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// Notes: -Notice that num is also included in the returned array.

  function arrayOfMultiples(num, length) {
    const result = [];
    for (let i = 1; i <= length; i++) {
      result.push(num * i);
    }
    return result;
  }
  
  // Example usage
  console.log(arrayOfMultiples(12, 10)); // Output: [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

//   Q4: Given an array, write a function to calculate its depth. Assume that a normal array has a depth of 1.

//   Examples
  
//   depth ([1, 2, 3, 4]) 1
  
//   depth ([1, [2, [3, 4]]]) 3

function depth(arr) {
    if (!Array.isArray(arr)) {
      return 0; // Not an array
    }
    let maxDepth = 1;
    for (let i = 0; i < arr.length; i++) {
      const currentDepth = depth(arr[i]) + 1;
      if (currentDepth > maxDepth) {
        maxDepth = currentDepth;
      }
    }
    return maxDepth;
  }
  
  // Example usage
  console.log(depth([1, 2, 3, 4])); // Output: 1
  console.log(depth([1, [2, [3, 4]]])); // Output: 3

//   The function uses recursion to calculate the depth of the array. If the input argument is not an array, the function immediately returns 0. 
//   Otherwise, it loops through each element of the array, recursively calling the depth() function on each element to determine its depth. 
//   The maximum depth of all elements is then determined and returned as the final depth of the input array.
  

// Q5:Given a letter, created a function which returns the nearest vowel to the letter. 
// If two vowels are equidistant to the given letter, return the earlier vowel.

// Examples: -

// nearestVowel("b") "a"

// nearestVowel("s") "u"

// nearestVowel("i") "i"

// Notes: -

// All letters will be given in lowercase.

// There will be no alphabet wrapping involved, meaning the closest vowel to "z" should return "u", not "a".
  

function nearestVowel(letter) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const distances = vowels.map(vowel => Math.abs(letter.charCodeAt(0) - vowel.charCodeAt(0)));
    const minDistance = Math.min(...distances);
    const nearestVowels = vowels.filter((vowel, index) => distances[index] === minDistance);
    return nearestVowels[0];
  }
  
//   Here's how this function works:

// Define an array of vowels.
// Calculate the distances between the given letter and each vowel, using the charCodeAt() method to get the ASCII code of each letter and subtracting them.
// Find the minimum distance using the Math.min() method.
// Filter the vowels array to keep only those vowels with the minimum distance.
// Return the first vowel in the filtered array.
// This function should return the nearest vowel to the given letter, or the earlier vowel if two vowels are equidistant.