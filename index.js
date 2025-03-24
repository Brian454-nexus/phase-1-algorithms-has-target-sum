function hasTargetSum(array, target) {
  // Use a Set to store numbers we've seen
  const seenNumbers = new Set();

  // Loop through the array once
  for (const num of array) {
    // Calculate the complement needed to reach the target
    const complement = target - num;

    // If the complement exists in the set, we found a pair
    if (seenNumbers.has(complement)) return true;

    // Add the current number to the set
    seenNumbers.add(num);
  }

  // No pair found after checking all numbers
  return false;
}

/* 
  Big O Time Complexity: O(n)
  - We loop through the array once, where n is the array length.
  - Set operations (has and add) are O(1) on average.
  Space Complexity: O(n)
  - We store up to n numbers in the Set.
*/

/* 
  Pseudocode:
  FUNCTION hasTargetSum(array, target)
    CREATE an empty Set called seenNumbers
    FOR each number in array
      SET complement = target - number
      IF seenNumbers contains complement
        RETURN true
      ADD number to seenNumbers
    END FOR
    RETURN false
  END FUNCTION
*/

/*
  Explanation of the solution:
  - We use a Set to track numbers we’ve seen as we iterate through the array.
  - For each number, we calculate its complement (target - number).
  - If the complement is already in the Set, we’ve found two numbers that sum to the target.
  - If not, we add the current number to the Set and continue.
  - This avoids checking every pair by using extra memory to track seen values.
  - Example: [3, 8, 12, 4, 11, 7], target = 10
    - num = 3, complement = 7, set = {3}
    - num = 8, complement = 2, set = {3, 8}
    - num = 12, complement = -2, set = {3, 8, 12}
    - num = 4, complement = 6, set = {3, 8, 12, 4}
    - num = 11, complement = -1, set = {3, 8, 12, 4, 11}
    - num = 7, complement = 3, set has 3 → return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Provided test cases
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  // Additional custom test cases
  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 7));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 10, 15], 20));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 1], 2));

  console.log("");
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4, 5, 6], 20));

  console.log("");
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 5));
}

module.exports = hasTargetSum;