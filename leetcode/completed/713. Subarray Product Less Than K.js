/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function numSubarrayProductLessThanK(nums, k) {
  if (k <= 1) {
      return 0;
  }
  
  let count = 0;
  let prod = 1;
  let left = 0;
  
  for (let right = 0; right < nums.length; right++) {
      prod *= nums[right];
      while (prod >= k) {
          prod /= nums[left];
          left++;
      }
      count += right - left + 1;
  }
  
  return count;
}