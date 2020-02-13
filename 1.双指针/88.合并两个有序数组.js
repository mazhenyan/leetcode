/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let index1 = m - 1;
  let index2 = n - 1;
  let index = m + n - 1;
  while (index1 >= 0 || index2 >= 0) {
    let a = nums1[index1];
    let b = nums2[index2];
    if (index1 < 0) {
      nums1[index--] = nums2[index2--];
    } else if (index2 < 0) {
      nums1[index--] = nums1[index1--];
    } else if (a > b) {
      nums1[index--] = nums1[index1--];
    } else {
      nums1[index--] = nums2[index2--];
    }
  }
  return nums1;
};
// @lc code=end
