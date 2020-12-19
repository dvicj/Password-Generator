// Assignment code here

 
var generatePassword = function () {
  var passLengthPrompt = prompt("How long would you like your password to be? Please enter a number beetwen 8 and 128.");
  //Choose length of password 
  var passwordLength = function() {
    //check to see if answer is invalid 
    if (passLengthPrompt === null || passLengthPrompt === "" || isNaN(passLengthPrompt) || passLengthPrompt < 8 || passLengthPrompt > 128) {
      alert("You need to provide a valid answer! Please try again.");
      return passwordLength(); 
    }
    passLengthPrompt = parseInt(passLengthPrompt);
    console.log ("Password length is " + passLengthPrompt); 
  } 
  passwordLength(); 

  //Generate a random number 
  var randomNumConfirm = window.confirm("Do you want your password to contain a number?");
  var number = "";
  //if yes 
  if (randomNumConfirm) {
    function specialNumber() {
      for (var i = 0; i < 128; i++)
        number += Math.floor(Math.random()*10); 
        return number; 
      }
    console.log(specialNumber());
  } 

  //Generate a random special character 
  var randomCharConfirm = window.confirm("Do you want your password to contain a special character? ('!#$%&()*+-,./;:<>?@_')"); 
  var character = ""; 
  var charSelection = "!#$%&()*+-,./;:<>?@_";
  //if yes
  if (randomCharConfirm) {
    function specialChar() {
      for (var i = 0; i < 128; i++)
         character += charSelection.charAt(Math.floor(Math.random() * charSelection.length));
         return character; 
      }
    console.log(specialChar())
  }

  //Generate a random capitalized letter
  var randomLetterConfirm = window.confirm("Do you want your password to contain capital letters?");
  var capLetter = ""; 
  var capSelection = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //if yes 
  if (randomLetterConfirm) {
    function capitalLetter() {
      for (var i = 0; i < 128; i++)
      capLetter += capSelection.charAt(Math.floor(Math.random() * capSelection.length));
      return capLetter; 
    }
    console.log(capitalLetter())
  }
  //Generate random lower case letters
  var randomSmallLetterConfirm = window.confirm("Do you want your password to contain lower case letters?");
  var lowLetter = ""; 
  var lowSelection = "abcdefghijklmnopqrstuvwxyz";
  //if yes 
  if (randomSmallLetterConfirm) {
    function littleLetter() {
         for (var i = 0; i <= 128; i++)
         lowLetter += lowSelection.charAt(Math.floor(Math.random() * lowSelection.length));
         return lowLetter; 
         }
    console.log(littleLetter())
  }

  var characterSet =  number + character + lowLetter + capLetter; 
  var returnCharacters = ""; 
  function passwordGenerate() { 
    for (var i = 0; i < passLengthPrompt; i++) {
      n = characterSet.length; 
      returnCharacters += characterSet.charAt(Math.random()* n); 
    }
    return returnCharacters;  
    } 
    console.log(returnCharacters); 
  }
  passwordGenerate(); 
  //var passLength = number + character + lowLetter + capLetter; 
  //console.log("Your password is: " + passLength); 
  //console.log(passLength.length);


generatePassword(); 
// determine password length 
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



// check if prompt answer was left blank, player hit "cancel", or provided a number instead



// function to set name
