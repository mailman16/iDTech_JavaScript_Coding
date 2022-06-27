// TO DO: Create an array variable called "words" with the following elements: 'This', 'is', 'JavaScript', 'Coding!'
// YOUR CODE GOES HERE
var words = ["this ","is ","JavaScript ","coding!"];
// TO DO: Create an empty string variable called "sentence".
// YOUR CODE GOES HERE
var sentence = "";
// TO DO: 
// 1. Create a function called "createSentence" that takes an array as an argument.
// 2. In the function use a for loop to iterate through each word element of the array.
// 3. Add each word to the "sentence" variable.
// 4. Return the "sentence".
// YOUR CODE GOES HERE
function createSentence ( words ) {
for ( let i = 0; i < words.length; i++ ) {
  sentence = sentence + words[i];
}
  return sentence;
}
// TO DO: Call the function "createSentence" using the console.log method.
// YOUR CODE GOES HERE
createSentence( words );
console.log(sentence);