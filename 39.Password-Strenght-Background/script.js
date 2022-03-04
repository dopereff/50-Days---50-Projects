const password = document.getElementById("password");
const background = document.getElementById("background");
const passwordStrengthBarEl = document.querySelector(".password-strength-bar");
const passwordStrengthEl = document.getElementById("password-strenght-value");
const blurDefaultValue = 20;
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialSymbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-"];

const passwordHasSpecialSymbols = (password) => {
  const passwordArray = password.split("");
  return passwordArray.some((symbol) => specialSymbols.includes(symbol));
};

const passwordHasNumbers = (password) => {
  const passwordArray = password.split("");
  return passwordArray.some((symbol) => numbers.includes(symbol));
};

const passwordHasCapitalLetters = (password) => {
  const passwordArray = password.split("");
  return passwordArray.some((symbol) => {
    if (specialSymbols.includes(symbol)) {
      return;
    }

    if (numbers.includes(symbol)) {
      return;
    }

    return symbol == symbol.toUpperCase();
  });
};

const updateBlur = (passwordStrength) => {
  const blurValue = blurDefaultValue - passwordStrength / 2.5;
  background.style.filter = `blur(${blurValue}px)`;
};

const updatePasswordStrenghtBar = (passwordStrength) => {
  passwordStrengthBarEl.style.width = `${passwordStrength}%`;
  if (passwordStrength < 16) {
    passwordStrengthBarEl.style.background = "red";
  } else if (passwordStrength > 16 && passwordStrength < 33) {
    passwordStrengthBarEl.style.background = "orange";
  } else {
    passwordStrengthBarEl.style.background = "green";
  }
};

password.addEventListener("input", calculatePasswordStrength);

function calculatePasswordStrength() {
  let passwordStrength = 0;

  for (i = 0; i < password.value.length; i++) {
    let lastSymbolValue = password.value[i];
    const symbolIsCapitalLetter = lastSymbolValue == lastSymbolValue.toUpperCase();
    const SymbolIsSpecialSymbol = specialSymbols.includes(lastSymbolValue);
    const SymbolIsNumber = numbers.includes(lastSymbolValue);

    if (SymbolIsSpecialSymbol) {
      passwordStrength += 7;
    } else if (SymbolIsNumber) {
      passwordStrength += 5;
    } else if (symbolIsCapitalLetter) {
      passwordStrength += 3;
    } else {
      passwordStrength += 2;
    }
  }

  if (!passwordHasCapitalLetters(password.value)) {
    passwordStrength -= 10;
  }

  if (!passwordHasNumbers(password.value)) {
    passwordStrength -= 10;
  }

  if (!passwordHasSpecialSymbols(password.value)) {
    passwordStrength -= 10;
  }

  if (passwordStrength < 0) {
    passwordStrength = 0;
  }

  if (passwordStrength > 50) {
    passwordStrength = 50;
  }

  if (password.value == "") {
    passwordStrength = 0;
  }

  passwordStrengthEl.innerText = `${passwordStrength * 2}%`;
  updateBlur(passwordStrength);
  updatePasswordStrenghtBar(passwordStrength);
}
