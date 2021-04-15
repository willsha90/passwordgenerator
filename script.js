// Assignment Code
var generateBtn = document.querySelector("#generate");
const UPPERCASE_LETTERS = ["A", "B", "C", "D"]
const LOWERCASE_LETTERS = ["a", "b", "c", "d"]
const NUMBERS = ["0", "1", "2", "3"]
const SPECIAL_CHARS = ["!", "@", "#", "%"]
// starting data
// user chooses some stuff
// - how long do you want the password to be? (length number)
// 1. lowercase letters
// 2. uppercase letters  
// 3. numbers  
// 4. special characters  

// functions
function generatePassword() {
  var passwordLength = prompt("How many characters do you prefer");
  console.log(passwordLength);
  var userCharacters = {}
  // - get the user's choices
  // - how long do you want the password to be?
  // - greater than 8 and less than 128
  // - say try again if less than 8 or greater than 128
  // store their choice    
  // do you want uppercase letters? store the choice
  var hasUpperCase = confirm("Do you want uppercase letters")
  // do you want lowercase letters? store the choice
  var hasLowerCase = confirm("Do you want lowercase letters")
  // do you want numbers? store the choice
  var hasNumbers = confirm("Do you want numbers")
  // do you want special characters? store the choice
  var hasSpecialCharacters = confirm("Do you want special characters")
  console.log(hasUpperCase, hasLowerCase, hasNumbers, hasSpecialCharacters);

  // combine the chosen arrays
  var letterPool = []
  if (hasUpperCase) {
    letterPool = letterPool.concat(UPPERCASE_LETTERS)
    console.log(letterPool);
  }
  if (hasLowerCase) {
    letterPool = letterPool.concat(LOWERCASE_LETTERS)
    console.log(letterPool);
  }
  if (hasNumbers) {
    letterPool = letterPool.concat(NUMBERS)
    console.log(letterPool);
  }
  if (hasSpecialCharacters) {
    letterPool = letterPool.concat(SPECIAL_CHARS)
    console.log(letterPool);
  }
  // randomly choose characters from the combined array and add them to a string called password
  function pickRandomItem(items) {

    return items[Math.floor(Math.random() * items.length)];

  }
  var password = ""
  var i;
  for (i = 0; i < 8; i++) {
    var c = pickRandomItem(letterPool)
    console.log(c);
   password.concat() 
  }
  // return a password

  return password +   



  // return a "string"

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// user interactions
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Initalization