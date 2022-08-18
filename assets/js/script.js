// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialArr = [
  "?",
  "!",
  ">",
  "<",
  "{",
  "}",
  "[",
  "]",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "'",
  ":",
  ";",
  ".",
  ",",
  "~",
  "`",
];
// TODO: Create rest of character arrays

function userPrompts() {
  var userAns = {};
  userAns.passLength = parseInt(
    prompt("Choose a password length between 8 and 128!")
  );

  if (userAns.passLength < 8 || userAns.passLength > 128) {
    alert("Your password must be between 8 and 128 characters.");
    return passLength;
  }

  userAns.specialAns = confirm(
    "Would you like to add special characters to your password?"
  );

  userAns.numAns = confirm("Would you like to use numbers in your password?");

  userAns.upperAns = confirm("Would you like to use uppercase letters in your");

  userAns.lowerAns = confirm(
    "Would you like lowercase characters in your password?"
  );
  console.log(userAns);
  if (
    !userAns.specialAns &&
    !userAns.numAns &&
    !userAns.upperAns &&
    !userAns.lowerAns
  ) {
    alert("Your password must contain character types.");
  }
  return userAns;

  // }
  // var upperAns= confirm('Would you like uppercase characters in your password?')[if (!upperAns)]
  // // var userChoices = { passLength, lowerAns}

  // return userChoices
  // TODO: Create User Prompt Function
  // - Must confirm what characters to use DONE
  // - Must prompt for password length DONE
  // - Use if statements to check user answers DONE
  // - return usersChoices object DONE
}

function generatePassword() {
  var userAns = userPrompts();
  console.log(userAns);

  var combinedArr = [];
  var newPassArr = [];

  if (userAns.lowerAns === true) {
    combinedArr = combinedArr.concat(lowerArr);
  }
  if (userAns.upperAns === true) {
    combinedArr = combinedArr.concat(upperArr);
  }
  if (userAns.specialAns === true) {
    combinedArr = combinedArr.concat(specialArr);
  }
  if (userAns.numAns === true) {
    combinedArr = combinedArr.concat(numberArr);
  }

  for (let index = 0; index < userAns.passLength; index++) {
    var randomChar = getRandomChar(combinedArr);
    newPassArr.push(randomChar);
  }

  // TODO: Create generatePassword function
  // - Combine arrays of chosen chars DONE
  // - creates newPass array DONE
  // - Randomly pick chars from combined character array
  // - Pushes picked character to new pass arr
  // - use join method on newPassArr
  // - return newPassArr as string
  return newPassArr.join("");
}

function getRandomChar(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
