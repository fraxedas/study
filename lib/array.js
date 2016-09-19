(function (array) {
    'use strict';

    array.binary_search = function (nums, target) {
        var first = 0;
        var last = nums.length - 1;

        while (first <= last) {
            var mid = first + Math.floor((last - first) / 2);

            if (nums[mid] === target) return true;

            if (nums[mid] < target) first = mid + 1;
            else last = mid - 1;
        }
        return false;
    };

    /**
     * Suppose a sorted array is rotated at some pivot unknown to you beforehand.
     * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
     * Find the minimum element.
     */
    array.rotated_search_min = function (nums) {
        var first = 0;
        var last = nums.length - 1;
        if (nums[first] < nums[last]) return nums[first];

        while (first < last) {
            if (last - first == 1) return nums[last];

            var mid = first + Math.floor((last - first) / 2);

            if (nums[mid] > nums[first]) first = mid;
            else last = mid;
        }
        return nums[first];
    };

    /**
     * Suppose a sorted array is rotated at some pivot unknown to you beforehand.
     * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
     * You are given a target value to search. If found in the array return its index, otherwise return -1.
     */
    array.rotated_search_index = function (nums, target) {
        var first = 0;
        var last = nums.length - 1;

        while (first <= last) {

            var mid = first + Math.floor((last - first) / 2);

            if (nums[mid] === target) return mid;

            if (nums[mid] >= nums[first])
                if (target >= nums[first] && target < nums[mid]) last = mid - 1;
                else first = mid + 1;
            else if (target < nums[mid] || target >= nums[first]) last = mid - 1;
            else first = mid + 1;
        }
        return -1;
    };

    /**
     * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
     * The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
     * How many possible unique paths are there?
     */
    array.uniquePaths = function (m, n) {
        if (m === 0 || n === 0) return 0;

        var matrix = new Array(m);
        for (var k = 0; k < m; k++) {
            matrix[k] = new Array(n);
        }

        for (var i = 0; i < m; i++) {
            for (var j = 0; j < n; j++) {
                if (i === 0 || j === 0) matrix[i][j] = 1;
                else {
                    matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
                }
            }
        }
        return matrix[m - 1][n - 1];
    };

    /**
    * Follow up for "Unique Paths":
    * Now consider if some obstacles are added to the grids. How many unique paths would there be?
    * An obstacle and empty space is marked as 1 and 0 respectively in the grid.
    * For example, there is one obstacle in the middle of a 3x3 grid as illustrated below.
    * [
    * [0,0,0],
    * [0,1,0],
    * [0,0,0]
    * ]
    * 
    * The total number of unique paths is 2.
    * https://leetcode.com/problems/unique-paths-ii/
    */
    array.uniquePathsWithObstacles = function (obstacleGrid) {
        var m = obstacleGrid.length;
        if (m === 0) return 0;
        var n = obstacleGrid[0].length;
        if (n === 0) return 0;

        var matrix = new Array(m);
        for (var k = 0; k < m; k++) {
            matrix[k] = new Array(n);
        }

        for (var i = 0; i < m; i++) {
            for (var j = 0; j < n; j++) {
                if (i === 0 && j === 0){
                     if (obstacleGrid[i][j]) matrix[i][j] = 0;
                    else matrix[i][j] = 1;
                }             
                else if (obstacleGrid[i][j]) matrix[i][j] = 0;
                else if (i === 0) matrix[i][j] = matrix[i][j - 1];
                else if (j === 0) matrix[i][j] = matrix[i - 1][j];
                else {
                    matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
                }
            }
        }
        return matrix[m - 1][n - 1];
    };

})(module.exports);