/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    let arr = [...s];
    for (let i = 0; i < indices.length; i++) {
        arr.splice(indices[i], 1, s[i]);
    }
    return arr.join('');
};