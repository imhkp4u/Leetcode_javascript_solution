/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let results = [];
    for (let i = 0; i < n; i++) {
        results.push(nums[i]);
        results.push(nums[i + n]);
    }
    return results;
};