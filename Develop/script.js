// Assignment code here

//Generate a random number 
var randomNumConfirm = window.confirm("Do you want your password to contain a number?");
if (randomNumConfirm) {
  var randomNum = Math.floor(Math.random()*10); 
  console.log(randomNum);
}

//Generate a random special character 
var randomCharConfirm = window.confirm("Do you want your password to contain a special character?");
if (randomCharConfirm) {
  function specialChar() {
    var character = ""; 
    var charSelection = "!#$%&()*+-,./;:<>?@_";
     for (var i = 0; i < 1; i++)
       character += charSelection.charAt(Math.floor(Math.random() * charSelection.length));
       return character; 
  }
  console.log(specialChar())
};


//Generate a random capitalized letter
var randomLetterConfirm = window.confirm("Do you want your password to contain a capital letter?");
if (randomLetterConfirm) {
  function capitalLetter() {
    var capLetter = ""; 
    var capSelection = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     for (var i = 0; i < 1; i++)
     capLetter += capSelection.charAt(Math.floor(Math.random() * capSelection.length));
     return capLetter; 
  }
console.log(capitalLetter())
};

//Generate at least 5 random lower case letters
function littleLetter() {
    var lowLetter = ""; 
    var lowSelection = "abcdefghijklmnopqrstuvwxyz";
     for (var i = 0; i <= 4; i++)
     lowLetter += lowSelection.charAt(Math.floor(Math.random() * lowSelection.length));
     return lowLetter; 
};
console.log(littleLetter())

//Ensure password is at least 8 characters
var passwordLength = window.prompt("Please choose your password length. Enter 8, 16 or 24.")
if (passwordLength === 8){
  function eightCharPass(w, x, y, z) {
    return w + x + y + z; 
  }
console.log(eightCharPass(randomNum,specialChar,capitalLetter,littleLetter));
};
//Generate password
//Display password 



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
