/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums.sort((a,b)=>a-b);
    let n = nums.length;
    let max1=nums[n-1],max2=nums[n-2],max3=nums[n-3];
    let min1=nums[0],min2=nums[1],min3=nums[2];

    let baseProd = Math.max(max1*max2*max3,min1*min2*max1);
    let posProd = 100000*Math.max(max1*max2,min1*min2);
    let negProd = -100000*Math.min(max1*max2,min1*min2,max1*min1);

    return Math.max(baseProd,posProd,negProd);
};