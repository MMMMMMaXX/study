// 2 4 6 5 3 7 9
// 3 5 6 7 9
/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfBeauties = function(nums) {
    let max=nums[0];
    let minN = nums.slice(2);
    minN.sort();
    let minInd=0;
    let min = minN[minInd];
    let sum=0;
    for(let i=1;i<nums.length-1;i++){
        if(minN.indexOf(nums[i])!==-1&&i!==1){
            minN.splice(minN.indexOf(nums[i]),1);
        }
        min=minN[0];

    // console.log(minN);

        if(nums[i]>max&&nums[i]<min){

    // console.log('22222');
    // console.log(nums[i]);

            sum+=2;
            max=nums[i];
        } else{
            if(nums[i]>nums[i-1]&&nums[i]<nums[i+1]){
    // console.log('11111');
    // console.log(nums[i]);
                sum+=1;
                max=nums[i];
            }
            
            
        }
    }
    return sum;
};
console.log(sumOfBeauties([2, 4, 6, 5, 3, 7, 9]));
