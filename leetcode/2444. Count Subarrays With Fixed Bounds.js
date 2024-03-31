/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
  // const totalSubarrays =  (nums.length * (nums.length + 1)) / 2;
  let fixedBoundSubarrays = 0;
  let left = 0;
  let hasMinKOrMaxK = false
  let hasMinK = [false, 0]
  let hasMaxK = [false, 0]

  for (let right = 0; right < nums.length;) {
    if(!hasMinK[0] && nums[right] == minK) hasMinK = [true, right]
    if(!hasMaxK[0] && nums[right] == maxK) hasMaxK = [true, right]

    if((hasMinK[0] || hasMaxK[0]) && hasMinKOrMaxK == false){
      hasMinKOrMaxK = true
      left = right
    }

    if(hasMinK[0] && hasMaxK[0]){
      if(nums[right] >= minK && nums[right] <= maxK){
        // fixedBoundSubarrays++
        // if(nums)
        fixedBoundSubarrays += right - left + 1;
      } else {
        hasMinK[0] = false
        hasMaxK[0] = false
        hasMinKOrMaxK = false

        ++right
        left = right;
        continue
      }
    }

    right++
  }

  return fixedBoundSubarrays;
};
// console.log(countSubarrays([1,3,5,2,7,5], 1, 5))
// console.log(countSubarrays([1,1,5,1,1], 1, 1))
console.log(countSubarrays([6,5,1,1,5,1,3,5,2,7,6,5,4,1], 1, 5))
// [6,1,1,3,5,2,7,6,5,4,1]