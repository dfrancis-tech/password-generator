// Password generator function
var generatePassword = function() {
  // Choose length of password
  var length = window.prompt("How many characters should the password contain?");
  // Alert and discontinue if password length is not between 8 and 128
  if (length < 8 || length > 128) {
    window.alert("Password length should be between 8 and 128. Please try again!");
  }
  else {
    var charset = "";
    var lowCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numerics = "0123456789";
    var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\";
    // Add selected characters for password to var named charset
    var includeThis = window.confirm("Include LOWERCASE ALPHABETS in your password\n\nClick 'OK' to include or 'Cancel' to exclude.");
    if (includeThis === true) {
      charset += lowCase;
    }
    var includeThis = window.confirm("Include UPPERCASE ALPHABETS in your password\n\nClick 'OK' to include or 'Cancel' to exclude.");
    if (includeThis === true) {
      charset += upperCase;
    }
    var includeThis = window.confirm("Include NUMBERS in your password\n\nClick 'OK' to include or 'Cancel' to exclude");
    if (includeThis === true) {
      charset += numerics;
    }
    var includeThis = window.confirm("Include SYMBOLS in your password\n\nClick 'OK' to include or 'Cancel' to exclude");
    if (includeThis === true) {
      charset += specialCharacters;
    }
    // Give warning if no character type is selected
    if (charset === "") {
    window.alert("Please select atleast one type of character for generating password.");
    }
    // Choose random characters of length selected from selected character types
    var n = charset.length;
    var output = "";
    for (var i = 0; i < length; ++i) {
        output += charset.charAt(Math.floor(Math.random() * n));
    }
    // verify result in console
    console.log(output);
    // Write generated password inside textarea with class=card-body
    document.getElementById("password").innerHTML = output;
  }
};
// Password generation starts with the click of button with id = Generate
generate.addEventListener("click", generatePassword);
