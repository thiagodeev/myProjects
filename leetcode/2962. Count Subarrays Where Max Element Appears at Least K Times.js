/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  const maxNumber = Math.max(...nums);
  const totalSubarrays =  (nums.length * (nums.length + 1)) / 2;
  let count = 0;
  let maxCount = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if(nums[right] == maxNumber){
      maxCount++
      while (maxCount >= k) {
        if(nums[left] == maxNumber) maxCount--;
        left++;
      }
    }
    count += right - left + 1;
  }

  return totalSubarrays - count;
};
console.log(countSubarrays([1, 3, 2, 3, 3], 2));
