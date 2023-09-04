// flag - kĩ thuật đặt cờ hiệu kiểm tra cái gì đó có thoả 1 điều kiện không

// function isPositiveEvenNumber(n) {
//   let isValid; // undefined

//   // checking ...

//   return isValid;
// }

function isPositiveEvenNumber(n) {
  let isValid; // undefined

  // checking ...
  if (n > 0 && n % 2 === 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
}

// v2

function isPositiveEvenNumber2(n) {
  let isValid = false; // undefined

  // checking ...
  if (n > 0 && n % 2 === 0) {
    isValid = true;
  }

  return isValid;
}
// v3

function isPositiveEvenNumber3(n) {
  if (n > 0 && n % 2 === 0) {
    return true;
  }

  return false;
}

// v4

function isPositiveEvenNumber4(n) {
  return n > 0 && n % 2 == 0;
}

console.log(isPositiveEvenNumber4(10));
