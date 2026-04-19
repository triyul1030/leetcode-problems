/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const currVal = romanMap[s[i]];
    const nextVal = romanMap[s[i + 1]];

    if (nextVal > currVal) {
      total -= currVal;
    } else {
      total += currVal;
    }
  }
  return total;
};

// Test cases

// Test cases
function testRomanToInt() {
  // Example 1
  const s1 = "III";
  console.log(romanToInt(s1)); // Expected: 3

  // Example 2
  const s2 = "LVIII";
  console.log(romanToInt(s2)); // Expected: 58

  // Example 3
  const s3 = "MCMXCIV";
  console.log(romanToInt(s3)); // Expected: 1994

  // Additional test case
  const s4 = "IV";
  console.log(romanToInt(s4)); // Expected: 4
}

testRomanToInt();
