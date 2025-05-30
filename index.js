const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

function cleanString(str) {
  // Regex to match non-alphanumeric characters (including underscore)
  const regex = /[\W_]/g;
  return str.toLowerCase().replace(regex, "");
}

function checkPalindrome() {
  const originalInput = textInput.value;

  // Check if input is empty
  if (originalInput.trim() === "") {
    resultDiv.textContent = "Please enter some text.";
    resultDiv.className = "result-container alert";
    return;
  }

  const cleanedInput = cleanString(originalInput);
  const reversedInput = cleanedInput.split("").reverse().join("");

  // Display the result
  if (cleanedInput === reversedInput) {
    resultDiv.innerHTML = `<strong>"${originalInput}"</strong> is a palindrome!`;
    resultDiv.className = "result-container success";
  } else {
    resultDiv.innerHTML = `<strong>"${originalInput}"</strong> is not a palindrome.`;
    resultDiv.className = "result-container fail";
  }
}

// Event Listeners
checkButton.addEventListener("click", checkPalindrome);

// Allow pressing Enter key in the input field to trigger the check
textInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkPalindrome();
  }
});
