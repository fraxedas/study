
var assert = require("assert");
var code = require("../lib/code");

describe('code', function () {

    describe('multiples of 3 or 5', function () {

        it('below 10 should return 23', function () {

            var value = code.multiples(3, 5, 10);
            assert.equal(value, 23);

        });

        it('below 1000 should return 233168', function () {

            var value = code.multiples(3, 5, 1000);
            assert.equal(value, 233168);

        });
    });

});