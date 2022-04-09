/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let maxVal = Math.max(...candies);
    return candies.map(n => {
        if (maxVal - n <= extraCandies) return true;
        else return false;
    })
};