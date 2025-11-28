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
