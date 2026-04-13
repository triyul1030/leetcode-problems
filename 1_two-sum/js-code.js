/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        numMap.set(currentNum, i);
    }
};

// Test cases
function testTwoSum() {
    // Example 1
    const nums1 = [2, 7, 11, 15];
    const target1 = 9;
    console.log(twoSum(nums1, target1)); // Expected: [0,1]
    
    // Example 2
    const nums2 = [3, 2, 4];
    const target2 = 6;
    console.log(twoSum(nums2, target2)); // Expected: [1,2]
    
    // Example 3
    const nums3 = [3, 3];
    const target3 = 6;
    console.log(twoSum(nums3, target3)); // Expected: [0,1]
    
    // Additional test case
    const nums4 = [1, 5, 3, 7, 9];
    const target4 = 12;
    console.log(twoSum(nums4, target4)); // Expected: [1,3] (5 + 7 = 12)
}

// Run tests
testTwoSum();