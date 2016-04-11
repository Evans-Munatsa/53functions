var high = require('../high_low');
var assert = require('assert');

describe("takes a list of numbers", function() {
    it("takes a list of numbers as a parameter and returns the highest and lowest numbers in the list", function() {
        var result = high(1, 3, 4, 5);
        assert.equal(high(), 1, 5);
    })
})