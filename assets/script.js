// Assignment code here

// Character generator
var generatePassword = function(length) {
  // Choose length of password
  var length = window.prompt("Enter the length of password.");
  
  // Selecting characters
  var charset = "";
  var lowCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numerics = "0123456789";
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]\^_`{|}~";
  
  var includeThis = window.confirm("Include lowercase alphbets");
  if (includeThis === true) {
    charset += lowCase;
  }
  var includeThis = window.confirm("Include uppercase alphbets");
  if (includeThis === true) {
    charset += upperCase;
  }
  var includeThis = window.confirm("Include numbers");
  if (includeThis === true) {
    charset += numerics;
  }
  var includeThis = window.confirm("Include symbols");
  if (includeThis === true) {
    charset += specialCharacters;
  }
  if (charset === "") {
   window.alert("Please select atleast one type of character for generating password");
 }
  var n = charset.length;
      var output = "";
  for (var i = 0; i < length; ++i) {
      output += charset.charAt(Math.floor(Math.random() * n));
  }
  console.log(output);
  // Write generated password inside textarea with class=card-body
  document.getElementById("password").innerHTML = output;
};


// Password generation starts with the click of button with id = Generate
generate.addEventListener("click", generatePassword);


/*
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
*/