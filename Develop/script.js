var charsSelection = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.']; 
var numSelection = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowSelection = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var capSelection = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 
// Assignment code here
var generatePassword = function () {
  var number = "";
  var character = ""; 
  var charSelection = "!#$%&()*+-,./;:<>?@";
  var capLetter = ""; 
  var capSelection = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowLetter = ""; 
  var lowSelection = "abcdefghijklmnopqrstuvwxyz";
  var numSelection = "0123456789";
  var returnCharacters = "";
  var options = [charSelection, capSelection, lowSelection, numSelection]; 
  console.log (typeof options); 
  console.log (String(options));
  var passwordGenerate = function(min, max) {
    for (var i = 1; i <= passLengthInterger; i++) {
      returnCharacters += String(options).charAt(Math.floor(Math.random()* passLengthInterger));
      return returnCharacters; 
    }
  };


  // choose length of password 
  var passLengthPrompt = prompt("How long would you like your password to be? Please enter a number between 8 and 128.");
  //Choose length of password 
  var passwordLength = function() {
    //check to see if answer is invalid 
    if (passLengthPrompt === null || passLengthPrompt === "" || isNaN(passLengthPrompt) || passLengthPrompt < 8 || passLengthPrompt > 128) {
      alert("You need to provide a valid answer! Please try again.");
      return passwordLength(); 
    }
    passLengthInterger = parseInt(passLengthPrompt);
    console.log ("Password length is " + passLengthInterger); 
  }; 
  passwordLength(); 

  // yes/ no characters
  var characterConfirm = confirm("Would you like your password to have special characters?"); 
  if (characterConfirm) {
    alert("Your password will contain special characters.");
  }
  
  // yes/ no numbers
  var numberConfirm = confirm("Would you like your password to have numbers?");
  if (numberConfirm) {
    alert("Your password will contain numbers.");
  }
  // yes/ no capital
  var capitalConfirm = confirm("Would you like your password to have capital letters?");
  if (capitalConfirm) {
    alert("Your password will contain capital letters.");
  }

  // yes/ no lowercase 
  var lowerConfirm = confirm("Would you like your password to have lowercase letters?");
  if (lowerConfirm) {
    alert("Your password will contain lowercase letters.");
  }

  if (characterConfirm, numberConfirm, capitalConfirm, lowerConfirm) {
    passwordGenerate(8, passLengthInterger);
  }
  console.log("Password is: " + passwordGenerate());
  passwordGenerate(); 

}; 
generatePassword(); 

  function specialChar() {
    for (var i = 1; i < passLengthInterger; i++)
      character += charSelection.charAt(Math.floor(Math.random() * passLengthInterger));
       return character; 
  }

  function specialNumber() {
    for (var i = 0; i < 10; i++)
      number += Math.floor(Math.random()*10); 
      return number; 
  } 

  function capitalLetter() {
    for (var i = 1; i < passLengthInterger; i++)
    capLetter += capSelection.charAt(Math.floor(Math.random() * passLengthInterger));
    return capLetter; 
  }

  function littleLetter() {
    for (var i = 1; i <= passLengthInterger; i++)
    lowLetter += lowSelection.charAt(Math.floor(Math.random() * passLengthInterger));
    return lowLetter; 
  }

 

  var randomNumConfirm = confirm("Do you want your password to contain a number?");
      //if yes to number 
    if (randomNumConfirm) {
      specialNumber(); 
      console.log(specialNumber()); 
    }; 

  var randomCharConfirm = confirm("Do you want your password to contain a special character? ('!#$%&()*+-,./;:<>?@_')"); 
    //if yes to character
     if (randomCharConfirm) {
       specialChar(); 
       console.log(specialChar()); 
    }; 

  var randomLetterConfirm = confirm("Do you want your password to contain capital letters?");
    //if yes to capital letter
    if (randomLetterConfirm) {
     capitalLetter(); 
     console.log(capitalLetter())
     };  

  var randomSmallLetterConfirm = confirm("Do you want your password to contain lower case letters?");
    //if yes to lowercase letter
    if (randomSmallLetterConfirm) {
      littleLetter(); 
      console.log(littleLetter()); 
    }; 
    
  var returnSpecialChar = ""; 
  var specialChar123 = function () {
    for (var i = 1; i <= passLengthInterger; i++)
    returnSpecialChar += specialChar().charAt(Math.floor(Math.random()* passLengthInterger)); 
    return returnSpecialChar; 
    }
    console.log("Trying this: " + specialChar123()); 
  

  var returnSpecialNumber = "";
  var specialNum123 = function () { 
    for (var i = 1; i <= passLengthInterger; i++)
    returnSpecialNumber += specialNumber().charAt(Math.floor(Math.random()* passLengthInterger)); 
    return returnSpecialNumber; 
    }
    console.log("Trying this " + specialNum123()); 
   

  var returnCapitalLetter = ""; 
  var capitalLetter123 = function () {
    for (var i = 1; i <= passLengthInterger; i++)
    returnCapitalLetter += capitalLetter().charAt(Math.floor(Math.random()* passLengthInterger)); 
    return returnCapitalLetter; 
    }
    console.log("Trying this " + capitalLetter123()); 
  

  var returnLittleLetter = ""; 
  var littleLetter123 = function () {
    for (var i = 1; i <= passLengthInterger; i++)
    returnLittleLetter += littleLetter().charAt(Math.floor(Math.random()* passLengthInterger)); 
    return returnLittleLetter; 
    }
    console.log("Trying this " + littleLetter123()); 


  function generatePassword2() {
   var
      length = passLengthInterger, 
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+-,./;:<>?@",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
       retVal += charset.charAt(Math.floor(Math.random() * passLengthInterger));
     }
      return retVal;
  }; 

  console.log(" What de " + generatePassword2()); 
  generatePassword2(); 

  function generatePassword3(length) {
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeric = "0123456789";
    var special = "!$^&*-=+_?";

    var options = [alpha, caps, numeric, special];

    var password = "";
    var passwordArray = Array(length);

    for (i = 0; i < length; i++) {
        var currentOption = options[Math.floor(Math.random() * options.length)];
        var randomChar = currentOption.charAt(Math.floor(Math.random() * currentOption.length));
        password += randomChar;
        passwordArray.push(randomChar);
    }; 
    console.log("Huh " + generatePassword3()); 
    generatePassword3(); 
  };  
   
 





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


