// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = ""
var letterPool = []
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
  if (passwordLength < 8 || passwordLength > 126)  { 
    alert("password must be between 8 and 126 characters")
    return
  }


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
  
generateRandomPassword(passwordLength)

}
  // randomly choose characters from the combined array and add them to a string called password
  function generateRandomPassword(x) {
    for (var i = 0; i < x; i++) {
      var c = pickRandomItem(letterPool)
      console.log(c);
      password += c
    }
   console.log(password)
   var passwordText = document.querySelector("#password");
  console.log('from writepassword',password)
  passwordText.value = password; }


  function pickRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  // return a password

 



    // return a "string"


// Write password to the #password input



// user interactions
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


// Initalization