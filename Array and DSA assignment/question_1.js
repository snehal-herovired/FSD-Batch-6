//  Question 1 : Write a program to print to duplicate elements of an array .
// Sample_input : [1,1,2,3,3,4,5,6,6]
// Sample_ouptut : 1,3,6 



let array = [1, 1, 2, 3, 3, 4, 5, 6, 6];
let index = 0,
  newArr = [];
const length = array.length;
function findDuplicates(arr) {
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] === arr[j]) {
        newArr[index] = arr[i];
        index++;
      }
    }
  }
  return newArr;
}
console.log(findDuplicates(array));