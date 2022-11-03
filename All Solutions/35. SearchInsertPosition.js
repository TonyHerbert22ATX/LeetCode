// sorted Arr of #'s... Always #'s .. Always sorted accending , no strings/funny business
// target #... Always number


// return the index if the target is found.... if not, return index where it would be inserted


! This is a solution *NOT using 0(log n)
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
};


let searchInsert  = function(nums, target){
    let left = 0
    let right = nums.length
    while(left < right){
        const middle = Math.floor((left + right ) / 2)
        if(nums[middle] < target){
            left = middle + 1
        }else{
            right = middle
        }
    }
    return left
}



console.log(searchInsert([1,3,5,6], 5), '2');
console.log(searchInsert([1,3,5,6], 2), '1');
console.log(searchInsert([1,3,5,6], 4), '2');
console.log(searchInsert([1,3,5,6], 7), '4');