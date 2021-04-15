// Assignment Code
var generateBtn = document.querySelector("#generate");

// starting data
  // user chooses some stuff
    // - how long do you want the password to be? (length number)
          // 1. lowercase letters
          // 2. uppercase letters  
          // 3. numbers  
          // 4. special characters  

// functions
function generatePassword () {
var person = prompt("How many characters do you prefer");
console.log(person);
var userCharacters = {}
// - get the user's choices
    // - how long do you want the password to be?
          // - greater than 8 and less than 128
              // - say try again if less than 8 or greater than 128
          // store their choice    
    // do you want uppercase letters? store the choice
    // do you want lowercase letters? store the choice
    // do you want numbers? store the choice
    // do you want special characters? store the choice

// combine the chosen arrays

// randomly choose characters from the combined array and add them to a string called password

// return a password


// return a password

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