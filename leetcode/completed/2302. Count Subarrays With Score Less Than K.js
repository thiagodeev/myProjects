/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
  if (k <= 1) {
      return 0;
  }
  
  let count = 0;
  let score = 0;
  let sum = 0
  let left = 0;
  
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    score = sum * (right - left + 1);
    while (score >= k) {
      sum -= nums[left];
      score = sum * (right - left);
      left++;
    }
    count += right - left + 1;
  }
  
  return count;
}
console.log(countSubarrays([1,1,1], 5))