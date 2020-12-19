// Password generator function
var generatePassword = function() {
  // Choose length of password
  var length = window.prompt("How many characters should the password contain?");
  // Alert and discontinue if password length is not between 8 and 128
  if (length < 8 || length > 128) {
    window.alert("Password length should be between 8 and 128. Please try again!");
  }
  else {
    var output = "";
    var numOfTypes = 0;
    var lowerCase = "";
    var upperCase = "";
    var numerics = "";
    var specialCharacters = "";
    var passwordPart = "";
    var charSet ="";
    var quotient = 0;
    var allCharacterTypes = [lowerCase, upperCase, numerics, specialCharacters];
    var remainder = 0;
    // Choose random characters of length selected from selected character types
    var random1 = function(type,count) {
      //var n = type.length;
      passwordPart = "";
      for (var i = 0; i < count; i++) {
          passwordPart += type.charAt(Math.floor(Math.random() * type.length));
      }
      return passwordPart;
    }
    // Add selected characters for password to var named charset
    // includeThis variable is reused
    var includeThis = window.confirm("Include LOWERCASE ALPHABETS in your password\n\nClick 'OK' to include or 'Cancel' to exclude.");
    if (includeThis === true) {
      numOfTypes += 1;
      lowerCase = "abcdefghijklmnopqrstuvwxyz";
      charSet += lowerCase;
    }
    var includeThis = window.confirm("Include UPPERCASE ALPHABETS in your password\n\nClick 'OK' to include or 'Cancel' to exclude.");
    if (includeThis === true) {
      numOfTypes += 1;
      upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      charSet += upperCase;
    }
    var includeThis = window.confirm("Include NUMBERS in your password\n\nClick 'OK' to include or 'Cancel' to exclude");
    if (includeThis === true) {
      numOfTypes += 1;
      numerics = "0123456789";
      charSet += numerics;
    }
    var includeThis = window.confirm("Include SYMBOLS in your password\n\nClick 'OK' to include or 'Cancel' to exclude");
    if (includeThis === true) {
      numOfTypes += 1;
      specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\";
      charSet += specialCharacters;
    }
    if (numOfTypes > 0) {
      quotient = Math.floor(length/numOfTypes);
      console.log(quotient);
     /* for(var p=0; p < allCharacterTypes.length; p ++) {
        var index = Math.floor(Math.random()*allCharacterTypes.length);
        output += random1(allCharacterTypes[index], quotient);
      }
      */

      output += random1(lowerCase, quotient);
      output += random1(upperCase, quotient);
      output += random1(numerics, quotient);
      output += random1(specialCharacters, quotient);
      remainder = Math.floor(length % numOfTypes);
      console.log(remainder);
      if (remainder > 0) {
        output += random1(charSet, remainder);
      }
    }
    // Give warning if no character type is selected
    if (numOfTypes = 0) {
      window.alert("Please select atleast one type of character for generating password.");
      return;
    }
    // verify result in console
    console.log(output);
    // Write generated password inside textarea with class=card-body
    document.getElementById("password").innerHTML = output;
  }
};
// Password generation starts with the click of button with id = Generate
generate.addEventListener("click", generatePassword);
