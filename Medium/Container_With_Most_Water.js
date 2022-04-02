/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxCapacity = 0;
    let firstPoint = 0;
    let secondPoint = height.length - 1;
    for (let i = 0; i < height.length; i++) {
        let lowestValueIndex = height[firstPoint] < height[secondPoint] ? firstPoint : secondPoint;
        let capacity = height[lowestValueIndex] * (secondPoint - firstPoint);
        maxCapacity = capacity > maxCapacity ? capacity : maxCapacity;

        if (height[firstPoint] < height[secondPoint]) {
            firstPoint++;
        } else {
            secondPoint--;
        }
    }
    return maxCapacity;
};