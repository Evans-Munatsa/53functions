module.exports = function(username) {
    if (username) {
        return "Hello, " + username.toUpperCase() + '!';
    } else {
        return "hello!".toUpperCase();
    }
}