module.exports = function(n) {
    var greet = "hello world";
    for (greet = 0; greet < 2; greet++) {
        // Runs 2 times, and return hello world
        console.log('hello world!');
        return "hello world";
    }
}