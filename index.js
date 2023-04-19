const upperCharacters = [
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
const lowerCharacters = [
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
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
];

const allCharacters = [].concat(
  upperCharacters,
  lowerCharacters,
  numbers,
  symbols
);
const results = [];

let length = 15;
let lengthEl = document.getElementById("length");

let result1El = document.getElementById("result1");
let result2El = document.getElementById("result2");

let uppercaseEl = document.getElementById("uppercase");
let lowercaseEl = document.getElementById("lowercase");
let numbersEl = document.getElementById("numbers");
let symbolsEl = document.getElementById("symbols");

let incrementBtn = document.getElementById("icon-up");
let decrementBtn = document.getElementById("icon-down");

function incrementLength() {
  if (length < 15) {
    length += 1;
    lengthEl.textContent = length;
  }
}

function decrementLength() {
  if (length > 8) {
    length -= 1;
    lengthEl.textContent = length;
  }
}

function generatePasswords() {
  renderPasswords();
}

function renderPasswords() {
  result1El.textContent = "";
  result2El.textContent = "";
  const length = parseInt(lengthEl.textContent.trim());
  // Gets the length of the password from the length input field and converts it to a number
  const hasLowercase = lowercaseEl.checked; // Checks which types of characters (lowercase, uppercase, numbers, and symbols) the user wants to include in the password
  const hasUppercase = uppercaseEl.checked;
  const hasNumbers = numbersEl.checked;
  const hasSymbols = symbolsEl.checked;

  if (!hasLowercase && !hasUppercase && !hasNumbers && !hasSymbols) {
    result1El.textContent = "ERROR";
    result2El.textContent = "ERROR";
    return;
  }

  let passwordArray = []; // Creates an empty array passwordArray which will hold all the possible characters that can be included in the password based on the user's choices

  if (hasLowercase) {
    passwordArray = passwordArray.concat(lowerCharacters);
  }
  if (hasUppercase) {
    passwordArray = passwordArray.concat(upperCharacters);
  }
  if (hasNumbers) {
    passwordArray = passwordArray.concat(numbers);
  }
  if (hasSymbols) {
    passwordArray = passwordArray.concat(symbols);
  }

  for (let i = 0; i < length; i++) {
    let randomPassword1 = Math.floor(Math.random() * passwordArray.length);
    let randomPassword2 = Math.floor(Math.random() * passwordArray.length);

    result1El.textContent += passwordArray[randomPassword1];
    result2El.textContent += passwordArray[randomPassword2];
  }
}

function clearPasswords() {
  result1El.textContent = "";
  result2El.textContent = "";
}

function copyPassword1() {
  const password1 = result1El.textContent.trim(); // Get the password from the result1 element
  if (password1) {
    navigator.clipboard
      .writeText(password1) // Copy the password to the clipboard
      .then(() => {
        alert("password copied to clipboard!");
      });
  }
}

function copyPassword2() {
  const password2 = result2El.textContent.trim();
  if (password2) {
    navigator.clipboard
      .writeText(password2) // Copy the password to the clipboard
      .then(() => {
        alert("password copied to clipboard!");
      });
  }
}
