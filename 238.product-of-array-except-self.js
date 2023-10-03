/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let result = Array(nums.length).fill(1);
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  result;
  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }
  return result;
};
// @lc code=end
export default productExceptSelf;
