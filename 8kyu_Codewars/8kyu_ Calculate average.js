/*
Description:
Write function avg which calculates average of numbers in given list.
*/

function find_average(array) {
  if (array.length == 0) return 0;
  return array.reduce((result, current) => result + current, 0) / array.length;
}
