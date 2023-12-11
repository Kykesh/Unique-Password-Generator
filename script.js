// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function to generate password based on selected criteria
function generatePassword() {
var length = prompt("Choose a length for your password (8-128 characters):");
var includeLower = confirm("Include lowercase characters?");
var includeUpper = confirm("Include uppercase characters?");
var includeNumeric = confirm("Include numeric characters?");
var includeSpecial = confirm("Include special characters?");

// Validation
if (length < 8 || length > 128 || (!includeLower && !includeUpper && !includeNumeric && !includeSpecial)) {
    alert("Please select valid criteria.");
    return "";
}

// Character sets
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var allChars = "";
    
if (includeLower) allChars += lowerCaseChars;
if (includeUpper) allChars += upperCaseChars;
if (includeNumeric) allChars += numericChars;
if (includeSpecial) allChars += specialChars;

// Generate password
var password = "";
for (var i = 0; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
}

return password;
}

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
