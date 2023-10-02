// Function to prompt the user for password criteria and generate a password
function generatePassword() {
  // Prompt for password length
  let passwordLength = parseInt(prompt("Enter the desired password length (between 8 and 128 characters):"));

  // Validate the password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  // Prompt for character types
  let useLowercase = confirm("Include lowercase characters?");
  let useUppercase = confirm("Include uppercase characters?");
  let useNumeric = confirm("Include numeric characters?");
  let useSpecial = confirm("Include special characters?");

  // Check if at least one character type is selected
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("You must select at least one character type.");
    return "";
  }

  // Define character pools based on selected character types
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericChars = "0123456789";
  const specialChars = "!@#$%^&*()_+";

  // Create a character pool based on selected character types
  let characterPool = "";
  if (useLowercase) characterPool += lowercaseChars;
  if (useUppercase) characterPool += uppercaseChars;
  if (useNumeric) characterPool += numericChars;
  if (useSpecial) characterPool += specialChars;

  // Generate the password
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool.charAt(randomIndex);
  }

  return password;
}

// Function to write the generated password to the page
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}

// Get reference to the #generate element
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

