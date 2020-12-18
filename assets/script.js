// Assignment code here

// Character generator
var generatePassword = function(length) {
  // Selecting characters
  var charset = "";
  var lowCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numerics = "0123456789";
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]\^_`{|}~";
  
  var lc = window.confirm("Include lowercase alphbets");
  if (lc === true) {
    charset += lowCase;
  }
  var lc = window.confirm("Include uppercase alphbets");
  if (lc === true) {
    charset += upperCase;
  }
  var lc = window.confirm("Include numbers");
  if (lc === true) {
    charset += numerics;
  }
  var lc = window.confirm("Include symbols");
  if (lc === true) {
    charset += specialCharacters;
  }
  if (charset === "") {
   window.alert("Please select atleast one type of character for generating password");
 }
  var n = charset.length;
      output = "";
  for (var i = 0; i < length; ++i) {
      output += charset.charAt(Math.floor(Math.random() * n));
  }
  return output;
}
var length = window.prompt("Enter the length of password.");
var password = generatePassword(length);
console.log(password);

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
