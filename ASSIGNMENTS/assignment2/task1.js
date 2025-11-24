function NUMBER(number) {
  if (number % 2 == 0) {
    console.log(`${number} is an even number.`);
  } else {
    console.log(`${number} is an odd number.`);
  }

  if (number > 0) {
    console.log(`${number} is a positive number.`);
  } else if (number < 0) {
    console.log(`${number} is a negative number.`);
  } else {
    console.log(`${number} is zero.`);
  }

  if (number % 3 === 0 && number % 5 === 0) {
    console.log(`${number} is divisible by both 3 and 5.`);
  } else {
    console.log(`${number} is not divisible by both 3 and 5.`);
  }
}
NUMBER(20);
NUMBER(-10)