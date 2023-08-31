// Logical operators

// Nếu là số dương thì ...
function checkNumber1(n) {
  if (n > 0) {
  }
}

// Nếu là số dương chẳn thì ...
function checkNumber2(n) {
  if (n > 0 && n % 2 === 0) {
  }
} // % -> chia dư

// Nếu là số dương chẵn và lớn hơn 10 thì ...
function checkNumber3(n) {
  if (n > 0 && n % 2 === 0 && n > 10) {
  }
} // cái này n > 10 && n % 2 == 0 là ok rùi nhỉ

// Nếu là số dương chẵn chia hết cho 5 và lớn hơn 10 thì ...
function checkNumber4(n) {
  if (n > 0 && n % 2 === 0 && n > 10 && n % 5 === 0) {
  }
}
// Nếu là số dương chẳn hoặc số âm lẻ thì ...
// function checkNumber5(n) {
//   if ((n > 0 && n % 2 === 0) || (n < 0 && n % 2 !== 0)) {
//   }
// }
function checkNumber5(n) {
  const isEvenPositive = n > 0 && n % 2 === 0;
  const isOddNegative = n < 0 && n % 2 !== 0;
  if (isEvenPositive || isOddNegative) {
  }
}
