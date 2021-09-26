const resultEl = document.getElementById("result");
const clipboardEl = document.getElementById("clipboard");
const lengthEl = document.getElementById("length");
const upperEl = document.getElementById("uppercase");
const lowerEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generatePassEl = document.getElementById("generate");

const randomFunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNum,
  symbol: getRandomSymbol,
};

generatePassEl.addEventListener("click", () => {
  let hasLength = +lengthEl.value;
  let hasLower = lowerEl.checked;
  let hasUpper = upperEl.checked;
  let hasSymbol = symbolsEl.checked;
  let hasNumber = numbersEl.checked;

  resultEl.innerText = generatePassword(
    hasLength,
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol
  );
});

clipboardEl.addEventListener("click", () => {
  const textArea = document.createElement("textarea");
  const pass = resultEl.innerText;
  if(!pass){return}
  textArea.value = pass;

  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();

  alert("Password copied to clipboard");
});

function generatePassword(length, lower, upper, number, symbol) {
  let generatePassword = "";
  let typesCount = lower + upper + number + symbol;
  let typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return " ";
  }
  for (let i = 0; i < length; i += 1) {
 
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatePassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatePassword.slice(0, length);

  return finalPassword;
}




function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbol = "!@#$%^&*<>(){}[]=,/.";
  return symbol[Math.floor(Math.random() * symbol.length)];
}
