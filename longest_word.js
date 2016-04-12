module.exports = function() {
    var string = "Photosynthesis is a process used by plants and other organisms to convert light energy";
    var str = string.split(" ");
    var longest = 0;
    var word = null;

    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}