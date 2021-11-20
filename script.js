var generateBtn = document.querySelector("#generate");

// Arrays for number, specialCharacter, alphabetSmall, alphabetCapital
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var specialCharacter = ["!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" , "(" , ")" , "/"]

var alphabetSmall = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"]

var alphabetCapital = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z"]

// // Printing on the console
// console.log(number);
// console.log(specialCharacter);
// console.log(alphabetSmall);
// console.log(alphabetCapital);

// Defining user variables


// var plength = [];


// // Write password to the #password input
// function writePassword() {
//     password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;
// }

// Character length prompt
function generatePassword() {
     var minMaxLength  = prompt ("How many chars you want it:");
    // while loop to check the min and max condition
    if (minMaxLength  < 8 || minMaxLength  > 128)  {
      minMaxLength = prompt("Hint: Min 8 Char and Max 128 Char");
      if (minMaxLength <= 8) alert("Your Password length shouild be between 8 and 128 charactersPleae Try Again");
    }
    
    // Prompt to confirm from user to choose from
    var specialCharacter = window.confirm("Choose specialCharacter");
    var alphabetSmall = window.confirm("Choose alphabetSmall");
    var alphabetCapital = window.confirm("Choose alphabetCapital");

    var userValue  = [];
    var password = [];
    
    console.log(userValue)

    // if statements to check true or flase 
    if (number === true) {
      userValue  = userValue.concat(number);
      password.push ( 
        number[Math.floor(Math.random() * number.length)]
      )
   }    

    if (specialCharacter === true) {
      userValue  = userValue.concat(specialCharacter);
      password.push ( 
        specialCharacter[Math.floor(Math.random() * specialCharacter.length)]
      )    
    }

    if (alphabetSmall === true) {
      userValue  = userValue.concat(alphabetSmall);  
      password.push ( 
        alphabetSmall[Math.floor(Math.random() * alphabetSmall.length)]
      )    
   }

   if (alphabetCapital === true) {
    userValue  = userValue.concat(alphabetCapital); 
    password.push ( 
      alphabetCapital[Math.floor(Math.random() * alphabetCapital.length)]
    )  

    // for loop to check min and max length of the password
    for (i = password.length; i < minMaxLength; i++) {  
      password.push( userValue[
        Math.floor(Math.random() * userValue.length)  ]  )
          console.log(password)   
    }
   // return password
}
     // User values will be joined to combine all array into one and then split it   
     return password.join("");
 }
 

function randomPass(choice) {
  var random1 = Math.floor(Math.random() * choice.length);
  console.log(random1)
  var randomSaved = choice[random1];
  console.log(randomSaved)
  return randomSaved;
}


function writePassword() {
  var print = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = print; 
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);