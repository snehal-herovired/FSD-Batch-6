// Question 3: Write a program to check whether a String is palindrome or not .
// Note :A Palindrome String is a string that is the same after the reverse .
// Example : LOL , MADAM. 

var string1 = "MADAM";
var newstring = "";
for (let i = string1.length - 1; i >= 0; i--) {
    newstring = newstring + string1[i];
}
if (newstring === string1) {
    console.log("Yes");
} else {
    console.log("No");
}

