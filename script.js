var charsSelection = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.']; 
var numSelection = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowSelection = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var capSelection = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 
// Assignment code here
passwordSelection = function () {
  // choose length of password 
  var passLength = parseInt (prompt("How long would you like your password to be? Please enter a number between 8 and 128.")); 
    if (passLength === null || passLength === "" || isNaN(passLength) || passLength < 8 || passLength > 128) {
     alert("You need to provide a valid answer! Please try again.");
     return; 
    };
    console.log ("Password length is " + passLength); 

    var characterConfirm = confirm("Would you like your password to have special characters?");

    var numberConfirm = confirm("Would you like your password to have numbers?");

    var capitalConfirm = confirm("Would you like your password to have capital letters?");

    var lowerConfirm = confirm("Would you like your password to have lowercase letters?");
    var passwordOptions = {
      length: passLength,
      characterConfirm: characterConfirm,
      numberConfirm: numberConfirm,
      lowerConfirm: lowerConfirm,
      capitalConfirm: capitalConfirm
  };
  return passwordOptions;
}


// getting random characters from different arrays  
function randomArray(arr) {
  var randomSelection = Math.floor(Math.random() * arr.length);
  var randElement = arr[randomSelection];
  return randElement;
}; 

function passwordGenerator() { 
  var options = passwordSelection(); 
  var result = [];
  // Array to store types of characters to include in password
  var optionalCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var importantCharacters = [];

  // if the selection chosen by the user contains special characters, then add the special characters to the password
  if (options.characterConfirm) {
    optionalCharacters = optionalCharacters.concat(charsSelection);
    importantCharacters.unshift(randomArray(charsSelection));
  }

  // if the selection chosen by the user contains numbers, then add the numbers to the password at random
  if (options.numberConfirm) {
    optionalCharacters = optionalCharacters.concat(numSelection);
    importantCharacters.push(randomArray(numSelection));
  }

  // if the selection chosen by the user contains lowercase letters, then add the letters to the password at random
  if (options.lowerConfirm) {
    optionalCharacters = optionalCharacters.concat(lowSelection);
    importantCharacters.unshift(randomArray(lowSelection));
  }

  // if the selection chosen by the user contains capital letters, then add the letters to the password at random
  if (options.capitalConfirm) {
    optionalCharacters = optionalCharacters.concat(capSelection);
    importantCharacters.push(randomArray(capSelection));
  }

  // generate the password based on the length chosen 
  for (var i = 0; i < options.length; i++) {
    var optionalCharacter = randomArray(optionalCharacters);
    result.push(optionalCharacter);
  }

  // One of each guaranteed character in the result
  for (var i = 0; i < importantCharacters.length; i++) {
    result[i] = importantCharacters[i];
  } 
  debugger; 
  return result.join(''); 
}; 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



