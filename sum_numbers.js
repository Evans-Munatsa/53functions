module.exports = function(n) {
    var array = [];

    for (var i = 0; i <= n; i++) {
        array.push(i)
    }

    for (var i = 0, sum = 0; i < array.length; sum += array[i++]);
    return sum;
}