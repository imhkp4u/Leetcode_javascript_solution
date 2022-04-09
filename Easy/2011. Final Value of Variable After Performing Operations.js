/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    return (operations.map(n => n.includes('+') ? 1 : -1)).reduce((a, c) => { return a + c; }, 0);
};