/* eslint-disable no-unused-vars */

/**
 * @param {[string]} names
 */
function likes(names) {
  const n = names.length;

  if (n == 0) return "no one likes this";
  if (n == 1) return `${names[0]} likes this`;
  if (n == 2) return `${names[0]} and ${names[1]} like this`;
  if (n == 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  else return `${names[0]}, ${names[1]} and ${n - 2} others like this`;
}

function digitalRoot(n) {
  while (n > 9) {
    n = (n % 10) + Math.floor(n / 10);
  }
  return n;
}

/** @param {n:Number} */
function descendingOrder(n) {
  var digits = Array(10).fill(0);
  while (n > 0) {
    const r = n % 10;
    digits[r]++;
    n = Math.floor(n / 10);
  }

  let num = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    while (digits[i] > 0) {
      num = 10 * num + i;
      digits[i]--;
    }
  }
  return num;
}
/**@param {arr:string[]} */
function sumUpNumbers(arr) {
  const regex = /^[0-9]{1,3}(,[0-9]{3})*(\.[0-9]{1,2})?$/;
  let sum = 0;
  for (let nStr of arr) {
    if (nStr.match(regex)) {
      sum += Number(nStr.replaceAll(",", ""));
    } else {
      sum += Number(nStr.replaceAll(".", "").replaceAll(",", "."));
    }
  }
  return sum.toLocaleString("en-US", { minimumFractionDigits: 2 });
}

/**@param {Number} number  */
function solution(number) {
  if (number <= 3) return 0;
  if (number < 5) return 3;
  const calcSum = (a) => {
    let n = Math.floor((number - 1) / a);
    return (n / 2) * (2 * a + (n - 1) * a);
  };
  return calcSum(3) + calcSum(5) - calcSum(15);
}
