var assert = require("assert");
var number = require("../lib/number");

describe('number', function () {

    describe('isUgly', function () {

        it('should return true for 1', function () {

            assert.equal(number.isUgly(1), true);

        });

        it('should return true for 6', function () {

            assert.equal(number.isUgly(6), true);

        });

        it('should return false for 14', function () {

            assert.equal(number.isUgly(14), false);

        });

        it('should return false for 0', function () {

            assert.equal(number.isUgly(0), false);

        });
    });

    describe('nthUglyNumber', function () {

        it('should return 1 for 1', function () {

            assert.equal(number.nthUglyNumber(1), 1);

        });

        it('should return 3 for 3', function () {

            assert.equal(number.nthUglyNumber(3), 3);

        });

        it('should return 12 for 10', function () {

            assert.equal(number.nthUglyNumber(10), 12);

        });

    });

});