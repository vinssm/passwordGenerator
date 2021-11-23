var generateBtn = document.querySelector("#generate");

// Arrays for number, specialCharacter, alphabetSmall, alphabetCapital
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var specialCharacter = ["!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" , "(" , ")" , "/"]

var alphabetSmall = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"]

var alphabetCapital = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z"]

// // Printing on the console..
    console.log(number);
    console.log(specialCharacter);
    console.log(alphabetSmall);
    console.log(alphabetCapital);
    
// Initializing variable..
var minMaxLength = "";

// Character length prompt..
function generatePassword() {
  var password = []
     var minMaxLength  = prompt ("How many chars you want it:");
    // while loop to check the min and max condition
    if (minMaxLength  <= 8 || minMaxLength  >= 128)  {
     // minMaxLength = propt("Hint: Min 8 Char and Max 128 Char");
      alert("Your Password length shouild be between 8 and 128 charactersPleae Try Again");
      minMaxLength  = prompt ("How many chars you want it:");
    }
      
    // Prompt to confirm from user to choose from
    var isNumber = window.confirm("Choose number");
    var isSpecialChar;
    var isAlphabetSmall;
    var isAlphabetCapital;

  // Checking user input conditions
    if (isNumber){
      isSpecialChar = window.confirm("Choose specialCharacter");
    }
    if (isSpecialChar){
      isAlphabetSmall = window.confirm("Choose alphabetSmall");
    }
    if (isAlphabetSmall){
      isAlphabetCapital = window.confirm("Choose alphabetCapital");
    } 
  // This will end if user chooses to cancel
    else{
      window.confirm("You choose to cancel");
      return;
    }

  // Printing console log
    console.log('minMaxLength: '+minMaxLength);

  // Password Parameters
        password = password.concat(number);
        password = password.concat(specialCharacter);
        password = password.concat(alphabetSmall);  
        password = password.concat(alphabetCapital);   
      
// Random characters from array
    var randpassword = '';

// For loop to check condition and generate the password result
      for (var i = 0; i < minMaxLength; i++) {               
        randpassword = randpassword + password[Math.floor(Math.random() * password.length)];
            console.log('randpassword: '+randpassword) 
    
  }
    //return password
    return randpassword; 
}
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);