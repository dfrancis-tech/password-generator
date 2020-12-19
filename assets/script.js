// Function for 'Generate Password' Button click in the browser
var generatePassword = function() {
  // Choose length of password
  var desiredLength = window.prompt("How many characters should the password contain?");
  // Alert and discontinue if password length is not between 8 and 128
  if (desiredLength < 8 || desiredLength > 128) {
    window.alert("Password length should be between 8 and 128. Please try again!");
    return;                                                     // return when password length is wrong
  }
  // When password length is correct
  else {
    var numOfCharTypes = 0;           // Selected number of types of character sets
    var lowerCase = "";               // To store Lowercase alphabets if chosen
    var upperCase = "";               // To store Uppercase alphabets if chosen
    var numerics = "";                // To store numbers if chosen
    var specialCharacters = "";       // To store special characters if chosen
    var passwordPart = "";            // Value returned from the function that picks the characters radomly
    var output = "";                  // To link and store passwords generated as different parts
    var charSet ="";                  // To store all the superset of chosen characters types
    var numberGuarenteed = 0;         // Minimun number of characters from each chosen character types
    var numberRemain = 0;             // Number of characters which can be randomly chosen from the selected set of character type
    
    // Function for random picking of characters and joining parts of password containing chosen character types
    var partialPassword = function(type,count) {
      passwordPart = "";
      for (var i = 0; i < count; i++) {
          passwordPart += type.charAt(Math.floor(Math.random() * type.length));
      }
      return passwordPart;
    }
    // Function for Shuffling String. Source: https://www.codespeedy.com/shuffle-characters-of-a-string-in-javascript/
    var shuffle = function(outputString) {
      var arr = outputString.split('');                           // Convert String to array
      
      arr.sort(function() {
        return 0.5 - Math.random();
      });  
      var outputShuffled = arr.join('');                          // Convert Array to string
      return outputShuffled;                                     // Return shuffled string
    }
    
    // Alert and discontinue if no character type is selected
    if (numOfTypes = 0) {
      window.alert("Please select atleast one type of character for generating password.");
      return;                                                     // return when no character type is selected from prompts
    }

    // Check password criteria
    // includeThis variable is reused
    var includeThis = window.confirm("Include LOWERCASE ALPHABETS in your password\n\nClick 'OK' to include or 'Cancel' to exclude.");
    if (includeThis === true) {
      numOfCharTypes += 1;
      lowerCase = "abcdefghijklmnopqrstuvwxyz";
      charSet += lowerCase;
    }
    var includeThis = window.confirm("Include UPPERCASE ALPHABETS in your password\n\nClick 'OK' to include or 'Cancel' to exclude.");
    if (includeThis === true) {
      numOfCharTypes += 1;
      upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      charSet += upperCase;
    }
    var includeThis = window.confirm("Include NUMBERS in your password\n\nClick 'OK' to include or 'Cancel' to exclude");
    if (includeThis === true) {
      numOfCharTypes += 1;
      numerics = "0123456789";
      charSet += numerics;
    }
    var includeThis = window.confirm("Include SYMBOLS in your password\n\nClick 'OK' to include or 'Cancel' to exclude");
    if (includeThis === true) {
      numOfCharTypes += 1;
      specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\";
      charSet += specialCharacters;
    }
    
    // math for ensuring all selected character types are included in the generated password
    numberGuarenteed = Math.floor(desiredLength/numOfTypes);
    numberRemain = Math.floor(desiredLength % numOfTypes);
    //console.log(quotient);
    //Generate and join the equal parts of password
    output += partialPassword(lowerCase, numberGuarenteed);
    output += partialPassword(upperCase, numberGuarenteed);
    output += partialPassword(numerics, numberGuarenteed);
    output += partialPassword(specialCharacters, numberGuarenteed);
    console.log(output);
    // Shuffle password part to ensure inconsistency
    output = shuffle(output);
    console.log(output);
    // Generate and Join the second part of password
    //console.log(remainder);
    if (numberRemain > 0) {
      output += partialPassword(charSet, numberRemain);
    }
    // verify result in console
    console.log(output);
    // Write generated password inside textarea with class=card-body
    document.getElementById("password").innerHTML = output;
  }
};
// Password generation starts with the click of the button with id = Generate
generate.addEventListener("click", generatePassword);

