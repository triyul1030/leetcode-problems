/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reverseHalf = 0;

  while (x > reverseHalf) {
    const lastDigit = x % 10;
    reverseHalf = (reverseHalf * 10) + lastDigit;
    x = Math.floor(x / 10);
  }

  return x === reverseHalf || x === Math.floor(reverseHalf / 10);
};

// Test cases
function testIsPalindrome() {
  // Example 1
  const x1 = 121;
  console.log(isPalindrome(x1)); // Expected: true

  // Example 2
  const x2 = -121;
  console.log(isPalindrome(x2)); // Expected: false

  // Example 3
  const x3 = 10;
  console.log(isPalindrome(x3)); // Expected: false

  // Additional test case
  const x4 = 1221;
  console.log(isPalindrome(x4)); // Expected: true
}

testIsPalindrome();
