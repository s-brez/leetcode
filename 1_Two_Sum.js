function twoSum(nums, target) {
    let targetIndices = [];
    
    for (let i = 0; i < nums.length; i++) {

        for (let j = 0; j < nums.length; j++) {
    
            let value1 = nums[i];
            let value2 = nums[j];
    
            if (i !== j) { 
    
                let sum = value1 + value2;

                if (sum == target) {
                    targetIndices.push(i);
                    targetIndices.push(j);

                    return targetIndices;
                }
            }
        }
    }
};