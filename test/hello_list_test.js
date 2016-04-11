var list = require('../hello_list');
var assert = require('assert');

describe("should return a list of hello world", function() {
    it("take an argument", function() {
        var result = list(1);
        assert.equal(list(), "hello world")
    })
})