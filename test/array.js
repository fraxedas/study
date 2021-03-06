
var assert = require("assert");
var array = require("../lib/array");

describe('array', function () {

    describe('of [3,5,6,7,8,9]', function () {
        var nums = [3, 5, 6, 7, 8, 9];

        it('should return true when seaching for 5', function () {

            assert.equal(array.binary_search(nums, 5), true);

        });

        it('should return false when seaching for 4', function () {

            assert.equal(array.binary_search(nums, 4), false);

        });
    });

    describe('rotated_search_min', function () {
        it('should return 0 for [3, 5, 6, 7, 8, 9, 0, 1, 2]', function () {

            assert.equal(array.rotated_search_min([3, 5, 6, 7, 8, 9, 0, 1, 2]), 0);

        });

        it('should return 1 for [1]', function () {

            assert.equal(array.rotated_search_min([1]), 1);

        });

        it('should return 1 for [1,2]', function () {

            assert.equal(array.rotated_search_min([1, 2]), 1);

        });

        it('should return 1 for [2,1]', function () {

            assert.equal(array.rotated_search_min([2, 1]), 1);

        });

        it('should return 1 for [2,1]', function () {

            assert.equal(array.rotated_search_min([4, 5, 6, 1, 2, 3]), 1);

        });
    });

    describe('rotated_search_index', function () {
        it('should return 1 for [3, 5, 6, 7, 8, 9, 0, 1, 2] and 5', function () {

            assert.equal(array.rotated_search_index([3, 5, 6, 7, 8, 9, 0, 1, 2], 5), 1);

        });

        it('should return 0 for [1] and 1', function () {

            assert.equal(array.rotated_search_index([1], 1), 0);

        });

        it('should return -1 for [1] and 2', function () {

            assert.equal(array.rotated_search_index([1], 2), -1);

        });

        it('should return 1 for [1,3] and 3', function () {

            assert.equal(array.rotated_search_index([1, 3], 3), 1);

        });
    });

    describe('uniquePaths', function () {
        it('should return 1 for 1,1', function () {

            assert.equal(array.uniquePaths(1, 1), 1);

        });

        it('should return 1 for 1,100', function () {

            assert.equal(array.uniquePaths(1, 100), 1);

        });

        it('should return 1 for 100,1', function () {

            assert.equal(array.uniquePaths(100, 1), 1);

        });

        it('should return 2 for 2,2', function () {

            assert.equal(array.uniquePaths(2, 2), 2);

        });
    });

    describe('uniquePathsWithObstacles', function () {
        it('should return 2', function () {

            assert.equal(array.uniquePathsWithObstacles([
                [0, 0, 0],
                [0, 1, 0],
                [0, 0, 0]
            ]), 2);

        });

        it('should return 0', function () {

            assert.equal(array.uniquePathsWithObstacles([
                [0, 1, 0]
            ]), 0);

        });

        it('should return 0', function () {

            assert.equal(array.uniquePathsWithObstacles([
                [1]
            ]), 0);

        });
    });

    describe('isSelfCrossing', function () {
        it('should return true for [2, 1, 1, 2]', function () {

            assert.equal(array.isSelfCrossing([2, 1, 1, 2]), true);

        });

        it('should return false for [1, 2, 3, 4]', function () {

            assert.equal(array.isSelfCrossing([1, 2, 3, 4]), false);

        });

        it('should return true for [1, 1, 1, 1]', function () {

            assert.equal(array.isSelfCrossing([1, 1, 1, 1]), true);

        });

        it('should return true for [1,1,2,1,1]', function () {

            assert.equal(array.isSelfCrossing([1,1,2,1,1]), true);

        });

         it('should return true for [1,2,1,1,2]', function () {

            assert.equal(array.isSelfCrossing([1,2,1,1,2]), true);

        });
    });

});