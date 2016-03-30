module.exports = function(n) {
    var array = [];

    //loop through the numbers with the for loop and then push the numbers into the empty array
    for (var i = 1; i <= n; i++) {
        array.push(i);
    };
    return array;
};