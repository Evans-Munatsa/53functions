module.exports = function(username) {
    if (username === "Xolani") {
        return "Hello, " + username.toUpperCase() + '!';
    } else if (!username) {
        return "Hello, " + username.toUpperCase() + '!';
    } else {
        return "Hello!";
    }
}