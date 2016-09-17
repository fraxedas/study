(function (array) {
    'use strict';

    array.binary_search = function (nums, target) {
        var first = 0;
        var last = nums.length;

        while(first <= last){
            var mid = first + (last - first)/2;

            if(nums[mid] === target) return true;
            else if(nums[mid] < target) first = mid + 1;
            else last = mid - 1;
        }
        return false;
    };

    
})(module.exports);