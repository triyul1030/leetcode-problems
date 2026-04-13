/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
function getMinDistance(nums, target, start) {
    let minDistance = Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            const distance = Math.abs(i - start);
            if (distance < minDistance) {
                minDistance = distance;
            }
        }
    }
    
    return minDistance;
}

// Test cases
function testGetMinDistance() {
    // Example 1
    const nums1 = [1, 2, 3, 4, 5];
    const target1 = 5;
    const start1 = 3;
    console.log(getMinDistance(nums1, target1, start1)); // Expected: 1
    
    // Example 2
    const nums2 = [1];
    const target2 = 1;
    const start2 = 0;
    console.log(getMinDistance(nums2, target2, start2)); // Expected: 0
    
    // Example 3
    const nums3 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const target3 = 1;
    const start3 = 0;
    console.log(getMinDistance(nums3, target3, start3)); // Expected: 0
    
    // Additional test case
    const nums4 = [5, 3, 6, 1, 5];
    const target4 = 5;
    const start4 = 2;
    console.log(getMinDistance(nums4, target4, start4)); // Expected: 1 (index 3 is closer than index 0)
}

// Run tests
testGetMinDistance();