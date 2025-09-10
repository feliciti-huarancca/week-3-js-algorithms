// 7 - Create the function. It should accept two string parameters and return the longer one

// Your code here
function longerString(string1, string2) {
  if (string1.length > string2.length) {
    return string1
  } else {
    return string2
  }

}
  
console.log(longerString('codemify', 'test')) // codemify
console.log(longerString('automation', 'coding')) // automation
console.log(longerString('automation', 'the codemify')) // the codemify