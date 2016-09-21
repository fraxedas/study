(function (number) {
    'use strict';

    /**
     * Write a program to check whether a given number is an ugly number.
     * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.
     * Note that 1 is typically treated as an ugly number.
     * https://leetcode.com/problems/ugly-number/
     */
    number.isUgly = function (num) {
        var done;
        if (num === 0) return false;
        var list = [5, 3, 2];
        for (var i = 0; i < list.length; i++) {
            done = false;
            while (!done) {
                if (num % list[i] === 0) {
                    num = num / list[i];
                } else {
                    done = true;
                }
            }
        }

        return num === 1;
    };

    /**
     * Write a program to find the n-th ugly number.
     * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
     * For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
     * Note that 1 is typically treated as an ugly number.
     */
    number.nthUglyNumber = function (n) {
        if (n <= 0) return 0;
        if (n == 1) return 1;
        var t2 = 0, t3 = 0, t5 = 0;
        var k = new Array(n);
        k[0] = 1;
        for (var i = 1; i < n; i++) {
            var min = Math.min(k[t2] * 2, k[t3] * 3, k[t5] * 5);
            k[i] = min;
            if (k[i] == k[t2] * 2) t2++;
            if (k[i] == k[t3] * 3) t3++;
            if (k[i] == k[t5] * 5) t5++;
        }
        return k[n - 1];
    };





})(module.exports);