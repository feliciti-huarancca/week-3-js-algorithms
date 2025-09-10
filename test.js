
function largestNumber(num1, num2) {
  if (num1 > num2) { //5 > 5
    return num1
  } else if (num2 > num1){
    return num2
  } else {
    return 'They are equals'
  }
}

console.log(largestNumber(5,10)) //10
console.log(largestNumber(10,5)) //10
console.log(largestNumber(5,5)) // 5