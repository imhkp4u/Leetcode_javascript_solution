/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let mergedArray = [...nums1, ...nums2];
    mergedArray.sort((a, b) => a - b);
    let n = mergedArray.length, num, midTerm = mergedArray[Math.floor(n / 2)];
    (n % 2 !== 0) ? num = midTerm :
        num = (midTerm + mergedArray[Math.floor(n / 2) - 1]) / 2;
    return num;
};