//  Question 2 : Write a program to find the element with highest frequency in an array.
// Sample_input :[1,2,4,3,2,4,2,5,7,2]
// Sample_output :2 

function highFrequent(arr, n) {
    arr.sort();

    let max_count = 1,
      res = arr[0];
    let curr_count = 1;

    for (let i = 1; i < n; i++) {
      if (arr[i] == arr[i - 1]) {
        curr_count++;
      } else {
        curr_count = 1;
      }

      if (curr_count > max_count) {
        max_count = curr_count;
        res = arr[i - 1];
      }
    }

    return res;
  }

  let arr = [1, 2, 4, 3, 2, 4, 2, 5, 7, 2];
  let n = arr.length;

  console.log(highFrequent(arr, n));