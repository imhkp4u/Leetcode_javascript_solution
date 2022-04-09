/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
    const arr = [first];

    encoded.forEach((el, i) => {
        arr.push(arr[i] ^ el);
    });

    return arr;
};