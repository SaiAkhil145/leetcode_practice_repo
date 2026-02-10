/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left=0,right=height.length-1,maxArea=0;
    while(left<right){
        let width = right-left;
        let minHeight = Math.min(height[right],height[left]);
        let area = width*minHeight;
        maxArea = Math.max(maxArea,area);
        if(height[left]<height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxArea;
};