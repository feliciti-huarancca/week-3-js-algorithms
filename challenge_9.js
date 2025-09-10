// 9 - Older Than Me: Create a function that outputs a string specifying if the person in the example below is older or younger than you."

// Your code here

function compareAge(userName, userAge) {
  let myAge = 31

  if (myAge > userAge) {
    console.log(`${userName} is younger than me`)
  } else if (userAge > myAge) {
    console.log(`${userName} is older than me`)
  } else {
    console.log(`We have the same age`)
  }
  
}

compareAge("Joel", 36) // ➞ "Joel is older than me."
compareAge("Samuel", 24) // ➞ "Samuel is younger than me."
compareAge("Lily", 28) // ➞ "Lily is oder than me."