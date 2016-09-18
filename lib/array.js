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
            if(last - first == 1) return nums[last];

            var mid = first + Math.floor((last - first) / 2);

            if (nums[mid] > nums[first]) first = mid ;
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
                if(target >= nums[first] && target < nums[mid]) last = mid - 1 ;
                else first = mid + 1;
            else if(target < nums[mid] || target >= nums[first]) last = mid - 1 ;
                else first = mid + 1;
        }
        return -1;
    };


})(module.exports);