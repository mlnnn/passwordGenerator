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
  result1El.value = "";
  result2El.value = "";
  const length = +lengthEl.value;
  const hasLowercase = lowercaseEl.checked;
  const hasUppercase = uppercaseEl.checked;
  const hasNumbers = numbersEl.checked;
  const hasSymbols = symbolsEl.checked;

  let passwordArray = [];

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

    result1El.value += passwordArray[randomPassword1];
    result2El.value += passwordArray[randomPassword2];
  }
}

function clearPasswords() {
  result1El.value = "";
  result2El.value = "";
}

function copyPassword1() {
  password1El.select();
  document.execCommand("copy");
  alert("First Password copied to clipboard!");
}
