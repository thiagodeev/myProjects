/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
	if(nums.length == 1) return 1

  let greaterSubarray = 0
  let left = 0
  let sum = nums[0]

  for (let right = 1; right < nums.length; right++) {
		if ((sum & nums[right]) !== 0){
			do {
				sum -= nums[left]
				left++;
			} while (left < right && (sum & nums[right]) !== 0)
			
		}
		sum+= nums[right]
    greaterSubarray = Math.max(greaterSubarray, right - left + 1);
  }
  return greaterSubarray;

};
console.log(longestNiceSubarray([1,3,8,48,10]))