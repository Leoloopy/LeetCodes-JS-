var twoSum = function(nums, target) {
    let temp = []

    for(let i = 0; i < nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                temp.push(i)
                temp.push(j)
            }
        }
    }

    return temp;
}

console.log(twoSum([5,2,3,4] , 5))