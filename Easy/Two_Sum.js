/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (array, targetSum) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        let diff = targetSum - array[i];
        if (diff in obj) {
            return [obj[diff], i];
        } else {
            obj[array[i]] = i;
        }
    }
    return []
};